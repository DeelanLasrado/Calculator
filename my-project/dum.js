const express=require('express');
const app=express();
app.get('/',function(req,res){
  res.sendFile(__dirname+"/calc.html");
})
.listen(3000,function(){
  console.log("Server is ready!");
})