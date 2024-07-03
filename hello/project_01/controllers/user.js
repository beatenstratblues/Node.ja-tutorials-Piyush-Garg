const {USER} = require("../models/users");

async function getUsers(req, res) {
  if (!req.params.id) {
    const alluser = await USER.find({});
    return res.json(alluser);
  }

  const user = await USER.findById(req.params.id);
  return res.json(user);
}
async function patchUsers(req, res) {
  return res.json({ status: "Pending" });
}
async function deleteUsers(req, res) {
  return res.json({ status: "Pending" });
}

async function createUser(req, res) {
    const body = req.body;
    console.log(body);
    try {
      const result = await USER.create({
        first_name: body.first_name,
        last_name: body.last_nam,
        email: body.email,
        gender: body.gender,
        Job_title: body.Job_title,
      });
      return res.status(200).json({ message: "Successful" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Failed to create user", error });
    }
  }

module.exports = {
  getUsers,
  patchUsers,
  deleteUsers,
  createUser
};
