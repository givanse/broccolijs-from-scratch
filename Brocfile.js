var funnel = require('broccoli-funnel');
var concat = require('broccoli-concat');
var mergeTrees = require('broccoli-merge-trees');

var html = funnel('.', {
  files   : ['index.html'],
  destDir : '/'
});

var styles = concat('.', {
               inputFiles : ['style.css'],
               outputFile : '/site.css'
             });

module.exports = mergeTrees([html, styles]);
