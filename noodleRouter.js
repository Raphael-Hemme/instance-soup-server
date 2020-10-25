const express = require("express");

// require data in
const mockData = require("./mockdata.js");

// setup noodleRouter
const noodleRouter = express.Router();

noodleRouter.get("/", (req, res) => {
  res.send(mockData);
});

noodleRouter.get("/:id", (req, res) => {
  const el = mockData.find((el) => el.id === Number(req.params.id));
  res.send(el);

  /*   if (index) {
    console.log('test1')
    console.log(mockData[index])
    res.status(200).send(mockData[index]);
  } else {
    console.log('404');
    res.status(404).send('This soup was too tasty and is not in stock anymore.')
  } */
});

module.exports = noodleRouter;
