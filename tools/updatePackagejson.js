const fs = require('fs');
const del = require('del');
del.sync(['./dist//**']);


const packageJson = JSON.parse(fs.readFileSync('./package.json').toString());
delete packageJson.devDependencies;
delete packageJson.scripts;
packageJson.main = "index.js";
fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2));