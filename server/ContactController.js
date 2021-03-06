const express = require('express');

module.exports = function(app){

  app.post('/api/contact', function (req, res) {
    var helper = require('sendgrid').mail;
    var from_email = new helper.Email(req.body.email);
    var to_email = new helper.Email('noone1200@gmail.com');
    var subject = req.body.subject;
    var content = new helper.Content('text/plain', req.body.message);
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
      credentials: 'same-origin',
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });
    sg.API(request, function(error, response) {
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
      if (!error) {
        res.set('Content-Type', 'application/json');
        res.send('{"message":"BOOAHKASAH"}');
      }
    });
  });
  //other routes..
}