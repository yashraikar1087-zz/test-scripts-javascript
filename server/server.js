const express=require('express');
const expect=require('expect');

var app=express();
    
app.get('/',(req,res)=>{
    res.send("hello");
});

app.get('/users',(req,res)=>{
    res.send([{
        name:'Yash',
        age:23
    },{
        name:'Andrew',
        age:25
    },{
        name:'Jen',
        age:24
    }]);
});

app.listen(3000);

module.exports.app=app;