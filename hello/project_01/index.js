const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log("Hello form middleware 1");
    next();
})

app.use((req,res,next)=>{
    fs.appendFile("./lod.txt",`${req.path} : ${req.url} : ${req.method} : ${Date.now()}`,(err,data)=>{
        console.log("Hello form middleware 2");
        next();
    });
})

app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((a) => `<li>${a.first_name}</li>`).join(" ")}
    </ul>
    `;
    
    return res.send(html);
});

//RESTFUL APIS

app.route("/api/users/:id?").get((req, res) => {

    if(!req.params.id) return res.json(users);

    const userID=Number(req.params.id);
    const user = users.find((user)=>userID===user.id)
    return res.json(user);
}).patch((req, res)=>{
    return res.json({status:"Pending"});
}).delete((req, res)=>{
    return res.json({status:"Pending"});
});

app.get("/test",(req,res)=>{
    return res.send("Hey!!");
})

app.post("/api/users",(req,res)=>{
    const bdy=req.body;
    users.push(bdy);
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
        if(!err) console.log("Done!");
    });
    console.log(bdy);
    return res.json({status:"Pending"});
})

app.listen(8000, () => {
  console.log("The Server is listening on Port 8000");
});
