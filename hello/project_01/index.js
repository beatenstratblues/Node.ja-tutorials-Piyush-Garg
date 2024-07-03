const express = require("express");
const app = express();
const fs = require("fs");
const {connection2db} = require("./connection");
const {userRouter} = require("./routes/users");

const {USER} = require("./models/users");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connection2db("mongodb://127.0.0.1:27017/MyFirstdb");

//Routes

app.use("/user",userRouter);

app.listen(8000, () => {
  console.log("The Server is listening on Port 8000");
});
