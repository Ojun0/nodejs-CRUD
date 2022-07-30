var express = require('express');
var router = express.Router();
var connection = require("../db/db");

/* GET home page. */
router.get('/', function (req, res, next) {
  connection.query(
    "SELECT * FROM users",
    (err1, res1, fld1) => {
      try {
        res.render('index', { id: res1[1].id, pw: res1[1].pw, name: res1[1].name });
      } catch (err1) {
        throw err1;
      }
    }
  )
});

router.post('/', function (req, res, next) {
  console.log("aldskjaldajdad", req.body.txt);
  res.render('index', {});
});

router.post('/create', function (req, res, next) {
  var { id, pw, name } = req.body;
  console.log(id, pw, name);
  connection.query(
    "INSERT INTO users VALUES ( ?, ?, ? );",
    [ id, pw, name ],
    (err1, res1, fld1) => {
      try {
        res.redirect('/');
      } catch (err1) {
        throw err1;
      }
    }
  )
});

router.post('/update', function (req, res, next) {
  var { id, pw, name } = req.body;
  console.log(id, pw, name);
  connection.query(
    "UPDATE users SET id=?, pw=?, name=? WHERE id = ?;",
    [ id, pw, name, id ],
    (err1, res1, fld1) => {
      try {
        res.redirect('/');
      } catch (err1) {
        throw err1;
      }
    }
  )
});

router.post('/delete', function (req, res, next) {
  var { id, pw, name } = req.body;
  console.log(id, pw, name);
  connection.query(
    "DELETE FROM users WHERE id = ?;",
    [ id ],
    (err1, res1, fld1) => {
      try {
        res.redirect('/');
      } catch (err1) {
        throw err1;
      }
    }
  )
});

module.exports = router;
