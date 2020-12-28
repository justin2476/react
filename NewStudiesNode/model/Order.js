const mongoose = require('mongoose');
var schema = mongoose.Schema;
var Order = new schema({
    _id:String,
    appCustomerMobile:String,
    estimatedDeliveryDate:Date,
    deliveryInfo:{
        slot:{
            endTime:Date
        }
    }
  });
module.exports = mongoose.model('order',Order,'order') 
