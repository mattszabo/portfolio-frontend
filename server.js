// Simple express node server
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var exec = require('child_process').exec;
var app = express();

var EMAILS_FILE = path.join(__dirname, 'emails.json');

app.set('port', (process.env.PORT || 3300));

app.use('/', express.static('' + __dirname + ''));
app.use('/static/', express.static('' + __dirname + ''));
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
    var newEmail = {
      id: Date.now(),
      contactName: req.body.contactName,
      contactEmail: req.body.contactEmail,
      contactMessage: req.body.contactMessage
    };
    emails.push(newEmail);
    // write to file for archive purposes. serves as a backup if the email service fails.
    fs.writeFile(EMAILS_FILE, JSON.stringify(emails, null, 4), function(err) {
      if (err) {
        console.error('err: ', err);
        console.error('newEmail: ', newEmail);
        process.exit(1);
      }
      res.json(newEmail);
    });

    var emailBody = 'From: ' + newEmail.contactName + ' (' + newEmail.contactEmail + ' )\n\nMessage:\n\n' + newEmail.contactMessage
    exec('echo \"' + emailBody + '\" | mail -s \"Portfolio Contact\" szabo.matthew@gmail.com');
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
