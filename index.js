const dbconnect=require('./mongodb')
const express=require('express');
const response=require('express');
const app=express();//execute mod
app.use(express.json())
//get Api
app.get('/getdata/',async(req,res)=>{
    //connect api with dtbs
    let result= await dbconnect();
    result=await result.find().toArray();  
    res.send(result);      //fetch data from mongodb server
})

//post Api
app.post('/insertdata/',async(req,res)=>{
    let result= await dbconnect();
    result=await result.insertOne(req.body);
    res.send("data inserted succesfully")
})

//put api
app.put('/:name',async(req,res)=>{//dynamic(name)
    let result= await dbconnect();
    //result=await result.updateOne({name:"Arnav"},{$set:{city:"Mumbai"}});//static scenario
    result=await result.updateOne({name:req.params.name},{$set:req.body});//dynamic scenario
    res.send("Data updated succesfully")
})

//delete Api
app.delete('/:name',async(req,res)=>{
    let result=await dbconnect();
    result=await result.deleteOne({name:req.params.name})
    res.send("Data deleted successsfully");

})
app.listen(6000);
