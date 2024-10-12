var express = require('express');
var router = express.Router();


/* GET users listing. */
let users = [
  {"name":"Teppo Testi","age":35}, 
  {"name":"Teppo Testimies","age":31}, 
  {"name":"Teppo Testaus","age":32}, 
  {"name":"Teppo Testitesti","age":46}
];
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
