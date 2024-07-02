const http= require("http");
const fs=require("fs");
const url=require("url");

const myserver= http.createServer((req,res)=>{
    if (req.url==="/favicon.ico") return res.end();
    const log=`${Date.now()} : ${req.url} A new user has looged in\n`;
    const myurl=url.parse(req.url,true);
    console.log(myurl);

    fs.appendFile("./userLogs.txt",log,(err)=>{
        console.log("A log has Been added");
    });
    switch(myurl.pathname) {
        case "/":{
            res.end("This is the HomePage");
            break;  
        } 
        case "/About":{
            res.end("This Server Belongs to Jatin Singh");
            break;
        } 
        case "/Contact":{
            res.end("Contact me at : singh.jatin609@gmail.com");
            break;
        } 
    }
});


myserver.listen(8000,()=> console.log("Server Started"));