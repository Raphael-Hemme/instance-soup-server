const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// import & mount noodleRouter
const noodleRouter = require("./noodleRouter.js");
app.use("/", noodleRouter);

app.listen(PORT, () => {
  console.log("server is listening on ${PORT}");
});
