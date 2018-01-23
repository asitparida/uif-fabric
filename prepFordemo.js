let fs = require('fs');
let prism = require('./src/prism');
const path = __dirname + "\\src\\app\\demo\\app-breadcrumb-demo\\app-breadcrumb-demo.component.ts";
var walk = function (dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = dir + '/' + file;
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};
const tokenizedFiles = [];
walk(__dirname + '/src/app/demo', function (err, results) {
    if (err) throw err;
    const promises = [];
    if (results.length > 0) {
        results.forEach(path => {
            const promise = fs.readFileSync(path, 'utf8');
            promises.push(promise);
        });
        Promise.all(promises).then((data) => {
            data.forEach((code, index) => {
                let type = '';
                const path = results[index];
                const isTypeScript = path.indexOf('.ts') !== -1;
                const isMarkup = path.indexOf('.html') !== -1;
                let tokenized = '';
                if (isTypeScript) {
                    type = 'typescript';
                    tokenized = prism.highlight(code, prism.languages.typescript);
                } else if (isMarkup) {
                    type = 'markup';
                    tokenized = prism.highlight(code, prism.languages.markup);
                }
                const fileNames = path.split('/');
                const fileName = fileNames[fileNames.length - 1];
                const splits = fileName.split('.');
                const item = {
                    id: splits[0],
                    file: fileName,
                    type: type,
                    tokens: tokenized
                };
                const outputpath = __dirname + '/src/assets/definitions/' + fileName + '.json';
                const json = JSON.stringify(item);
                fs.writeFile(outputpath, json, 'utf8', function (err, result) {
                    if (err) throw err;
                    console.log( fileName + ': Definition written successfully');
                });
            });
        });
    }
});