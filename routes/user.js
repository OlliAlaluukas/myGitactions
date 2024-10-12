var express = require('express');
var router = express.Router();
const user = require('../models/user_model.js');


/* GET users listing. */

router.get('/', function(req, res, next) {
  user.getAllUsers(function(result){
    res.json(result);
  });
});

module.exports = router;
