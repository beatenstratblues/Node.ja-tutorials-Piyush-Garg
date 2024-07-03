const express = require("express");
const {USER} = require("../models/users");
const { getUsers, patchUsers, deleteUsers, createUser } = require("../controllers/user");

const userRouter = express.Router();

// RESTFUL APIs

userRouter
  .route("/:id?")
  .get("/",getUsers)
  .patch("/",patchUsers)
  .delete("/",deleteUsers);

userRouter.get("/test", (req, res) => {
  return res.send("Hey!!");
});

userRouter.post("/",createUser);

module.exports={userRouter};