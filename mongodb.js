const{MongoClient}=require('mongodb');
const url ="mongodb://localhost:27017"  //establish connection
const database='student';
const client=new MongoClient(url);

//function return db conn
const dbconnect=async()=>{
    const result=await client.connect();    //require await to handle promise
    const db= await result.db(database);
    return db.collection('student');
}
module.exports=dbconnect;