// Simple express node server
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

var EMAILS_FILE = path.join(__dirname, 'emails.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static('' + __dirname + ''));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
})

app.post('/api/emails', function(req, res) {
  fs.readFile(EMAILS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var emails = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newEmail = {
      id: Date.now(),
      contactName: req.body.contactEmail.contactName,
      contactEmail: req.body.contactEmail.contactMessage,
      contactMessage: req.body.contactEmail.contactMessage
    };
    emails.push(newEmail);
    fs.writeFile(EMAILS_FILE, JSON.stringify(emails, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(emails);
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
