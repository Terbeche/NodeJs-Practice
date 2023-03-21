const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { manageTasksRouter } = require("./router/manageTasksRouter");
const { accueilRouter } = require("./router/accueilRouter");
const { tasksRouter } = require("./router/tasksRouter");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(tasksRouter);
app.use(manageTasksRouter);
app.use(accueilRouter);

app.use((req, res, next) => {
  res.status(404).send("Sorry, the page you requested doesn't exist.");
});

app.listen(80);
