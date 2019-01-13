
import fetch from 'isomorphic-fetch';
const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);–


function triggerNextState(response) {
  console.log(response);
}

export function submitMessage(formValue) {

  const from_email = new helper.Email(formValue.email);
  const to_email = new helper.Email('noone1200@gmail.com');
  const subject = formValue.subject;
  const content = new helper.Content('text/plain', formValue.message);
  const mail = new helper.Mail(from_email, subject, to_email, content);
  console.log(sg);
  const request = sg.emptyRequest({
    body: mail.toJSON()
  });

  return (dispatch) => {
    return fetch('/v3/mail/send',
      {
        credentials: 'same-origin',
        method: 'POST',
        body: request.body
      })
      .then(response => response.json())
      .then(json => dispatch(triggerNextState(json)));
  };
}