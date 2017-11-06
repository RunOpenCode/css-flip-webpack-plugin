const path = require('path');
const getFlipCssCommands = require('./getCssFlipCommands');

const exec = require('child_process').exec;

function CssFlipPlugin() { }

CssFlipPlugin.prototype.apply = function(compiler) {

    compiler.plugin('done', function() {

        let commands = getFlipCssCommands(
            path.resolve('node_modules/css-flip/bin/css-flip'),
            path.resolve(compiler.options.output.path, 'manifest.json'),
            compiler.options.output.path,
            compiler.options.output.publicPath
        );

        for (let i = 0; i < commands.length; i++) {
            exec(commands[i]);
        }
    });
};

module.exports = CssFlipPlugin;
