const http= require("http");
const fs=require("fs");
const url=require("url");
const express=require("express"); 

const app=express();

app.get("/",(req,res)=>{
    return res.send("This is the home Page " + "Welcome " + req.query.name);
})
app.get("/About",(req,res)=>{
    return res.send("This is the About Page");
})

app.listen(8000,()=>{
    console.log("Server has Started");
})