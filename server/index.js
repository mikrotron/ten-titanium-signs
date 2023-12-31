const express = require("express");
const bodyParser = require("body-parser");

const DataAccessObject = require("./dataAccessObject");
const Comment = require("./comment");

const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
  const allowedOrigins = ["http://localhost:4173", "http://localhost:5173"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataAccessObject = new DataAccessObject("./database.sqlite3");
const comment = new Comment(dataAccessObject);

comment.createTable().catch((error) => {
  console.log(`Error: ${JSON.stringify(error)}`);
});

app.post("/createComment", function (request, response) {
  const { body } = request;
  comment.createComment(body).then((result) => {
    response.send(result);
  });
});

app.post("/createComments", function (request, response) {
  comment.createComments().then((result) => {
    response.send(result);
  });
});

app.get("/getComment", function (request, response) {
  const { body } = request;
  const { id } = body;
  comment.getComment(id).then((result) => {
    response.send(result);
  });
});

app.get("/getComments", function (request, response) {
  comment.getComments().then((result) => {
    response.send(result);
  });
});

app.delete("/deleteComments", function (request, response) {
  comment.deleteComments().then((result) => {
    response.send(result);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(`${__dirname}/index.html`);
});
