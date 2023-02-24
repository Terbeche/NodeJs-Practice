const express = require("express");

const path = require("path");

const taskModule = require("./model/task");

const {
  getAllTasks,
  addTask,
  findTaskById,
  deleteTaskWithId,
  updateTaskWithId,
} = taskModule;

const app = express();

app.get("/tasks", (req, res) => {
  res.set({ "Content-Language": "en-US,en" }).json(getAllTasks());
});

app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const task = findTaskById(parseInt(id));
  if (!task) res.status(404).json({ error: `Task with ${id} not found.` });
  else res.json(task);
});

app.get("/tasks/delete/:id", (req, res) => {
  const id = req.params.id;
  deleteTaskWithId(parseInt(id));
  res.json({ message: `Task with id ${id} has been deleted successfully.` });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/add-task", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "add.html"));
});

app.listen(80);
