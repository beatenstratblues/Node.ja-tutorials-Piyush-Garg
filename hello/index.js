const http= require("http");
const fs=require("fs");

const log=`${Date.now()} A new user has looged in\n`;

const myserver= http.createServer((req,res)=>{
    fs.appendFile("./userLogs.txt",log,(err)=>{
        res.end("Hello!!! this is my server!!!");
    });
});


myserver.listen(8000,()=> console.log("Server Started"));