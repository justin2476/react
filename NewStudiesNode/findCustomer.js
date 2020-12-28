var express = require('express'); 
const mongoose = require('mongoose');

const customer=require('./model/Customer.js')

 var findCustomer= async function(message){
    return new Promise(function (resolve, reject) {
 customer.find(message).read('secondary').exec( function (err, cust) {
  //  console.log("from cus find "+cust)
    if(err)
       reject(err)
       var cusArray=[];
       cust.forEach(function(i){
        var name=''; 
         var custId= i._id;
         if(i.fullName)
         {
          name=i.fullName;
         }
         else
         {
          name=i.firstName+" "+i.lastName
         }
         var obj={
           _id:custId,
           name:name
         }
         cusArray.push(obj);
       })
     if(cusArray!=[])
     {
         console.log(cusArray)
       resolve( cusArray);
     }
     else
    resolve("Not found");
    })
})
}
module.exports={'CustDetails':findCustomer}