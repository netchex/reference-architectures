var path = require('path');
var fs = require('fs');

var yamlFront = require('yaml-front-matter')
var Liquid = require('shopify-liquid');

var engine = Liquid({
    root: path.resolve(__dirname, '.'),
    extname: '.liquid'
});

var inputFilePath = '../app-service/index.liquid.md';
var outputFilePath = '../app-service/index.md'

var content = fs.readFileSync(inputFilePath, 'utf8');
var yml = yamlFront.loadFront(content);

var template = engine.parse(content);

engine.render(template, yml)
    .then(function (html) {
        fs.writeFile(outputFilePath, html)
    });
