// 
// del([
//     // 'dist/**/*!(*.umd.js|*.esm.js|*.d.ts|*.umd.js.map|*.esm.js.map|*.metadata.json)',
//     // 'dist/!(*.umd.js|*.esm.js|*.d.ts|*.umd.js.map|*.esm.js.map|*.metadata.json)'
//     'dist/**/*.js!(*.umd.js|*.esm.js|*.d.ts|*.umd.js.map|*.esm.js.map|*.metadata.json)',
//     'dist/**/*.js.map(*.umd.js|*.esm.js|*.d.ts|*.umd.js.map|*.esm.js.map|*.metadata.json)',
// ]).then(paths => {
//     console.log('Files and folders that would be deleted:\n', paths.join('\n'));
// });

const fs = require('fs');
const path = require('path');
const del = require('del');
const read = (dir) =>
    fs.readdirSync(dir)
        .reduce((files, file) =>
            fs.statSync(path.join(dir, file)).isDirectory() ?
                files.concat(read(path.join(dir, file))) :
                files.concat(path.join(dir, file)),
            []);

let filePaths = read('./dist');
filePaths = filePaths.filter((fpath =>
    !fpath.endsWith('.d.ts')
    && !fpath.endsWith('.esm.js')
    && !fpath.endsWith('.esm.js.map')
    && !fpath.endsWith('.umd.js')
    && !fpath.endsWith('.umd.js.map')
    && !fpath.endsWith('.metadata.json')
));
del(filePaths).then(paths => {
    console.log('Files and folders that would be deleted:\n', paths.join('\n'));
});