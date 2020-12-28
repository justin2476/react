const mongoose = require('mongoose');
//var schema = mongoose.Schema;
var url = "mongodb://10.10.2.20:13017/medlife";
mongoose.connect(url , { useNewUrlParser: true }, (err)=>{console.log('mongodbConnected '+err)} );