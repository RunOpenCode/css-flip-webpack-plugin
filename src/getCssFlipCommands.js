const fs = require('fs');

const getFlipCssCommand = function(baseDir, manifestPath, outputPath) {

    const outputArray = [];
    const data = fs.readFileSync(manifestPath, 'utf8');
    const manifest = JSON.parse(data);

    for (let item in manifest) {

        if (manifest.hasOwnProperty(item) && manifest[item].endsWith('.css')) {

            if (item.indexOf('.rtl.css') === -1) {
                outputArray.push(baseDir + ' ' + outputPath + manifest[item] + ' > ' + outputPath + manifest[item].replace('.css', '.rtl.css'));
            }
        }
    }

    return outputArray;
};

module.exports = getFlipCssCommand;
