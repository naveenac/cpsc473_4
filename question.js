var express = require('express');
var router = express.Router();
var costume = require('questionschema.js');

router.get('/retreivequestion', function(req, res, next){
  
var num = 0;
db.collection.find( { qty: { $gt: num } } )

res.json(question);
num=num+1;

})

router.post('/addquestion', function(req, res, next){
   db.questions.insert( { question: "", answer: "" } )
});

module.exports = router;
