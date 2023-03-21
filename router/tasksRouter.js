const express = require("express");
const path = require("path");
const taskModule = require("../model/task");
const { getAllTasks, findTaskById, deleteTaskWithId } = taskModule;

const tasksRouter = express.Router();

tasksRouter.use(express.urlencoded());

tasksRouter.get("/tasks", (req, res) => {
  res.set({ "Content-Language": "en-US,en" }).json(getAllTasks());
});

tasksRouter.get("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const task = findTaskById(parseInt(id));
  if (!task) res.status(404).json({ error: `Task with ${id} not found.` });
  else res.json(task);
});

tasksRouter.get("/tasks/delete/:id", (req, res) => {
  const id = req.params.id;
  deleteTaskWithId(parseInt(id));
  res.json({ message: `Task with id ${id} has been deleted successfully.` });
});

module.exports = { tasksRouter };
