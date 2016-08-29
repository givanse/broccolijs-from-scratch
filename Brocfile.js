var funnel = require('broccoli-funnel');
var concat = require('broccoli-concat');
var mergeTrees = require('broccoli-merge-trees');

var html = funnel('.', {
  files   : ['index.html'],
  destDir : '/'
});

var styles = concat('.', {
               inputFiles : ['style.css',
                             'fontello/css/fontello.css'],
               outputFile : '/site.css'
             });

var fonts = funnel('fontello/font', {
  files   : ['fontello.woff',
             'fontello.woff2',
             'fontello.ttf'],
  destDir : '/font'
});

module.exports = mergeTrees([html, styles, fonts]);
