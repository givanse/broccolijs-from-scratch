var funnel = require('broccoli-funnel');

var html = funnel('.', {
  files   : ['index.html'],
  destDir : '/'
});

module.exports = html;
