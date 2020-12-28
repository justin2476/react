
 
  async function newOrderFunction(){
    return new Promise(function (resolve, reject) {
       
        order.findOne({_id:"OR2009PDA-002A"}).read('secondary').exec( function (err, ord) {
       if(err)
          reject(err)
        if(ord)
        {
          resolve(ord);
        }
        else
          resolve(null);
       })
     })
   }
   async function myfunction(){
   var resultOfPro=await newOrderFunction();
   
   }
   
   
   myfunction();



   var estDelDate=function(ecash){
    if(ecash){
      if(ecash.status == 'CREDITED'){
          return("Ecash amount "+ecash.amount+" is Credited On "+ecash.creditedTime);
          }else{
          return("Ecash status : "+ ecash.status+" Created time: "+ ecash.createdTime +" Updated time: "+ecash.updatedTime)
          } }
  }




 