var start=new Date("2019-01-22T07:02:46.760Z");
var end=new Date("2019-01-23T18:02:46.760Z");

var name = "createdDate"
var name2= "isPrimary";
var val2=true;
var value = {$gt:start,$lt:end}
var query = {};
query[name] = value;
query[name2]=val2
print(query)
db.getCollection('Customers').find(query); 


//need to create an app to find customer details

//sould be able to query with any of the following feilds

/*
below are query field

_id
"partners._id"
sources
email
mobile
firstName
lastName
fullName
createdDate
"addresses.address0.city"
isPrimary (button)

*/
db.getCollection('Customers').find({ })