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
// the file is both the template and the data
var data = yamlFront.loadFront(content);
var yml = Object.assign({}, data);
// delete yml.articles
delete yml.__content

var template_source = '---' + yamlFront.dump(yml) + '---' + data.__content;
var template = engine.parse(template_source);

// console.dir(yamlFront.dump(yml)); // original yml <--

engine.render(template, data)
    .then(function (html) {
        fs.writeFile(outputFilePath, html)
    });
