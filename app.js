import express from 'express';
const app = express();
import userController from "./controllers/userController.js";

app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => res.send(console.log("usernames will be logged here - wip")));
// app.get("/new", (req, res) => {
//     res.send(
//         '<form action="/new" method="POST">'+
//             '<label for="username">Username:</label>'+
//             '<input type="text" name="username" id="username">'+
//             '<button type="submit">Submit</button>'+
//         '</form>'
//     )
// });
// app.post("/new", (req, res) => res.send(console.log("username to be saved: ", req.body.username))) 

app.get("/", async (req, res) => {
    console.log(req.query);
    console.log(req.query.search);
    if (req.query.search) {
        console.log(`find user controller`);
        await userController.findUsernameGet(req, res);
    } else {
        console.log(`get usernames controller`);
        await userController.getUsernames(req, res);
    }
});

// app.get("/", userController.getUsernames);
app.get("/new", userController.createUsernameGet);
app.post("/new", userController.createUsernamePost);
// app.get("/", userController.findUsernameGet);
app.get("/delete", userController.deleteUsernamesGet);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
