var ghpages = require('gh-pages');

ghpages.publish('build', {
   branch: 'master',
   message: "auto-commit",
   repo: "http://github.com/MimiMicek/mirjanaerceg.github.io.git"
}, function(err) {
   console.log(err);
});