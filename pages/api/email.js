var mailgun = require('mailgun.js');

export default (req, res) => {
  var mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-a5823a3067abd2f122653d7aa391dda2'});
  mg.messages.create('mail.shenma.nz', {
    from: req.query.email,
    to: 'jianghaibo1985@gmail.com',
    subject: 'haibo.dev',
    text: req.query.email + ':' + req.query.message
  });
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(req.query))
}