var path = require('path');
var fs = require('fs');

var yamlFront = require('yaml-front-matter')
var Liquid = require('shopify-liquid');

var listFiles = require('./listFiles.js');

var engine = Liquid({
    root: path.resolve(__dirname, '.'),
    extname: '.liquid'
});

var pathToDocs = '..';

listFiles({ cwd: pathToDocs, pattern: '**/*.liquid.md' })
    .then(x => {
        var renderings = x.files.map(f => {
            return render(path.resolve(pathToDocs, f));
        }
        );
        return Promise.all(renderings);
    })
    .then(() => {
        console.log('Done.');
    });


function render(inputFilePath) {
    console.log(inputFilePath);
    var outputFilePath = inputFilePath.replace('.liquid', '');

    var content = fs.readFileSync(inputFilePath, 'utf8');
    var yml = yamlFront.loadFront(content);

    // hack
    // this next part is necessary because OPS doesn't allow object arrays in the yml
    var frontmatter = Object.assign({}, yml);
    delete frontmatter.articles
    delete frontmatter.__content
    content = '---\n' + yamlFront.dump(frontmatter) + '---' + yml.__content;
    // end of hack

    var template = engine.parse(content);

    return engine.render(template, yml)
        .then(function (markdown) {
            fs.writeFile(outputFilePath, markdown)
        });
}