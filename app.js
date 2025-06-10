import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send(console.log("usernames will be logged here - wip")));
app.get("/new", (req, res) => {
    res.send(
        '<form action="/new" method="POST">'+
            '<label for="username">Username:</label>'+
            '<input type="text" name="username" id="username">'+
            '<button type="submit">Submit</button>'+
        '</form>'
    )
});
app.post("/new", (req, res) => res.send(console.log("username to be saved: ", req.body.username)))

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
