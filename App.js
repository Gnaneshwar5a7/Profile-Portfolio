const express= require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const App=express()
App.use(express.static('public'))




const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect();
const db =client.db("portfolio");

App.engine('.html', require('ejs').renderFile);
// var count=0;

App.get("/",async (req,res)=>{
    var data =await db.collection('views').findOne();
    await db.collection('views').updateOne({},{$set:{'views':data.views+1}});
    data= await db.collection('views').findOne({});
    // console.log(data);
    res.render('index.html',{count:data.views});
})

App.listen(8000,(e)=>{
    if(e){
        console.lof(e);
    }
    else{
        console.log("The App is running...")
    }
});