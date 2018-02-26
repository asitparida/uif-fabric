var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
const path = require('path');

const exclusion = [
    "web.config"
]

function GetToken(val, token) {
    if (val.indexOf(token) !== -1) {
        const splits = val.split(token);
        if (splits.length > 0) {
            return splits[splits.length - 1];
        }
    }
    return null;
}

var host = null, user = null, password = null;
process.argv.forEach(function (val, index, array) {
    if (GetToken(val, '--host=') !== null) {
        host = GetToken(val, '--host=')
    }
    if (GetToken(val, '--user=') !== null) {
        user = GetToken(val, '--user=')
    }
    if (GetToken(val, '--password=') !== null) {
        password = GetToken(val, '--password=')
    }
});

if (!host) {
    host = process.env.AZURE_WA_SITE;
}
if (!user) {
    user = process.env.AZURE_WA_USERNAME;
}
if (!password) {
    password = process.env.AZURE_WA_PASSWORD;
}

const jsftp = require("jsftp");

console.log('jsftp required');

const ftp = new jsftp({
    host: host,
    user: user,
    pass: password
});

console.log('ftp newed');

const remoteDirectory = '/site/wwwroot/';

var config = {
    username: user,
    password: password,
    host: host,
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: remoteDirectory,
}

console.log('starting ftp auth');

ftp.auth(
    ftp.user,
    ftp.pass,
    function (err, data) {
        if (err) {
            console.log("Error is: ", err);
            process.exit();
            return;
        }
        console.log('log in successful');
        removeAllFilesInPublicFolder(ftp);
    }
);

function removeAllFilesInPublicFolder(ftp) {
    walk(ftp, remoteDirectory)
        .then((results) => {
            let files = flatten(results)
                .filter(Boolean);

            console.log("About to try deleting ", files.map((file) => file.filepath));

            // Non-empty directories can't be removed, should I remove all files first?
            let deletions = files.map((file) => {
                if (isDirectory(file)) {
                    return deleteDirectory(ftp, file);
                } else {
                    const isExcluded = exclusion.some(x => file.filepath.indexOf(x) !== -1);
                    if (!isExcluded) {
                        return deleteFile(ftp, file);
                    } else return;
                }
            });

            return Promise.all(deletions);
        }).then((deletionResults) => {
            console.log("Deletion results: ", deletionResults);
            ftp.destroy();
            ftpDeploy.on('uploading', function(data) {
                data.totalFileCount;       // total file count being transferred 
                data.transferredFileCount; // number of files transferred 
                data.percentComplete;      // percent as a number 1 - 100 
                data.filename;             // partial path with filename being uploaded 
            });
            ftpDeploy.on('uploaded', function(data) {
                console.log(data);         // same data as uploading event 
            });

            ftpDeploy.deploy(config, function(err) {
                if (err) console.log(err)
                else console.log('finished');
                process.exit();
            });
        }).catch((error) => {
            console.log("Error: ", error);
            ftp.destroy();
        });
}

function walk(ftp, directory) {
    return list(ftp, directory)
        .then((files) => {
            if (files.length === 0) {
                return Promise.resolve();
            }

            return Promise.all(files.map((file) => {
                file.filepath = path.join(directory, file.name);

                let promises = [];

                if (isDirectory(file)) {
                    promises.push(walk(ftp, path.join(directory, file.name)));
                }
                // Make sure the directory is after the files in the list of promises
                promises.push(Promise.resolve(file));

                return Promise.all(promises);
            }));
        });
}

function deleteDirectory(ftp, directory) {
    return new Promise((resolve, reject) => {
        ftp.raw('rmd', directory.filepath, (error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    })
}

function deleteFile(ftp, file) {
    return new Promise((resolve, reject) => {
        ftp.raw('dele', file.filepath, (error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    })
}

function list(ftp, directory) {
    return new Promise((resolve, reject) => {
        ftp.ls(directory, (error, files) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(files);
        });
    });
}

function isDirectory(file) {
    return file.type === 1;
}

const flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);
