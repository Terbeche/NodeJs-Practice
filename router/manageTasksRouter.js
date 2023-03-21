const express = require("express");
const path = require("path");
const taskModule = require("../model/task");
const { addTask } = taskModule;

const manageTasksRouter = express.Router();

manageTasksRouter.get("/add-task", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "add.html"));
});

manageTasksRouter.post("/add-task", (req, res) => {
  console.log(req);
  console.log(req.body);
  addTask(
    req.body.description,
    req.body.date,
    req.body.horaire,
    req.body.imageUrl,
    req.body.idUtilisateur
  );
  res.redirect("/");
});

module.exports = { manageTasksRouter };
