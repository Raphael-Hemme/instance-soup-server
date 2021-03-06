require("dotenv").config();
const express = require("express");
const mockData = require("./mockdata.js");
const { Pool } = require("pg");
const pool = new Pool();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

//const noodleRouter = express.Router();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // restrict calls only from this address
    methods: "GET", // only allow GET requests
  })
);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  pool
    .query("SELECT * FROM soups")
    .then((data) => res.send(data.rows))
    .catch((err) => res.sendStatus(500));
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM soups WHERE id=$1", [id])
    .then((data) => res.send(data.rows))
    .catch((err) => res.sendStatus(500));
});

app.post("/add-new-soup", (req, res) => {
  res.send("HERE SHOULD BE OUR FORM DATA");
  //res.end(JSON.stringify(req.body, null, 2));

  /*   pool
    .query("INSERT INTO soups WHERE id=$1", [id])
    .then((data) => res.send(data.rows))
    .catch((err) => res.sendStatus(500)) */
});

// app.get('/:id', (req, res) => {
// const index = mockData.find(el =>  el.id === Number(req.params.id));
//   res.send(mockData[index])
// /*   if (index) {
//     console.log('test1')
//     console.log(mockData[index])
//     res.status(200).send(mockData[index]);
//   } else {
//     console.log('404');
//     res.status(404).send('This soup was too tasty and is not in stock anymore.')
//   } */
// })

app.listen(3003);
