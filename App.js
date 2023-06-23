const express= require("express");
const path = require('path');
const App=express()
App.use(express.static('public'))
// App.set('view engine', 'html');
App.engine('.html', require('ejs').renderFile);
var count=0;

App.get("/",(req,res)=>{
    // res.sendFile(path.join(__dirname+'/views/index.html'))
    count+=1;
    res.render('index.html',{count:count});
})

App.listen(8000,(e)=>{
    if(e){
        console.lof(e);
    }
    else{
        console.log("The App is running...")
    }
});