const fs    = require('fs');
const path  = require('path');

const getFlipCssCommand = function(cssFlipBin, manifestPath, outputPath, publicPath) {

    const outputArray = [];
    const data = fs.readFileSync(manifestPath, 'utf8');
    const manifest = JSON.parse(data);

    for (let item in manifest) {

        if (manifest.hasOwnProperty(item) && manifest[item].endsWith('.css')) {

            manifest[item] = manifest[item].replace(publicPath, '');

            if (item.indexOf('.rtl.css') === -1) {
                outputArray.push(cssFlipBin + ' ' + path.join(outputPath, manifest[item]) + ' > ' + path.join(outputPath, manifest[item].replace('.css', '.rtl.css')));
            }
        }
    }

    return outputArray;
};

module.exports = getFlipCssCommand;
