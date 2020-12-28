const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ecash = new schema({
    _id:mongoose.Types.ObjectId,
    orderId:String,
    status:String,
    amount:Number,
    creditedTime:Date,
    createdTime:Date,
    updatedTime:Date
})
module.exports = mongoose.model("ecash",ecash,"Ecash");