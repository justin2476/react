const mongoose = require('mongoose');
const schema = mongoose.Schema;
const customer = new schema({
    _id: String,
    email: String,
    mobile: String,
    firstName: String,
    lastName: String,
    fullName: String,
    createdDate: Date,
    addresses: { address0: { city: String } },
    isPrimary: Boolean,
    partners: [{ _id: String }],
    sources: []
})
module.exports = mongoose.model("cust", customer, "Customers");