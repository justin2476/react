var express = require('express'); 
const mongoose = require('mongoose');
const findCustomer=require('./findCustomer')
const bodyParser=require('body-parser');
const connect=require('./connection');
var Promise = require('promise');
var app = express();
app.use(bodyParser.json())
app.get('/test',function(req, res) {
    res.sendFile('test.html', {root: __dirname })
});
var message={};
app.get('/message',async (req, res)=>{
message= req.query
var results= await findCustomer.CustDetails(message);
console.log(results)
 res.send(results);
})
// app.post('/message',(req,res)=>{
//   message=req.body;
// res.sendStatus(200);
// console.log(req.body)

// })
var port = 4000;
var server = app.listen(port,()=>console.log('Express app started on port ' + port));
