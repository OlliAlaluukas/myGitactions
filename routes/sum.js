var express = require('express');
var router = express.Router();

router.get('/:a?/:b?', function(req, res, next) {
    let result;
    if(req.params.a && req.params.b){
        let a=parseInt(req.params.a);
        let b=parseInt(req.params.b);
        
        if(typeof a === 'number' && isFinite(a) && (typeof b === 'number' && isFinite(a))){
            result=a+b;
        }
        else {
            result="Both variables should be numerical";
        }
    }
    else{
        result="Give two variables";
    }

    res.json(result);
});

module.exports = router;