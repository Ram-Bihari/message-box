var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.post('/submit-form', function (res, req) {
  const senderName = req.body.sendername;
  const message = req.body.message;
  let content = `Sent by ${senderName}
  Message: ${message}`;
  fs.writeFile(path.join(__dirname, '../message.txt'), content, function (err) {
    if (err) {
      console.log(err);
      return;
    }
  })
});
