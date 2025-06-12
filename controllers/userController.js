import db from "../db/queries.js"

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", ") + 
      '<form action="/" method="GET">'+
          '<label for="search">Search:</label>'+
          '<input type="text" name="search" id="search">'+
          '<button type="submit">Submit</button>'+
      '</form>'
  );
}

async function createUsernameGet(req, res) {
  // render the form
  res.send(
      '<form action="/new" method="POST">'+
          '<label for="username">Username:</label>'+
          '<input type="text" name="username" id="username">'+
          '<button type="submit">Submit</button>'+
      '</form>' 
  );
}

async function createUsernamePost(req, res) {
  console.log(req.body);
  const { username } = req.body;
  await db.insertUsername(username);
  console.log("username to be saved: ", req.body.username);
  res.redirect("/");
}

async function findUsernameGet(req, res) {
  const usernames = await db.searchUsername(req.query.search);
  console.log("Found Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function deleteUsernamesGet(req, res) {
  const usernames = await db.deleteAllUsernames();
  console.log("All usernames deleted: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

export default{
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  findUsernameGet,
  deleteUsernamesGet
};