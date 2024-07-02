const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((a) => `<li>${a.first_name}</li>`).join(" ")}
  </ul>
  `;

  return res.send(html);
});

app.listen(8000, () => {
  console.log("The Server is listening on Port 8000");
});
