const express = require("express");

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

app.listen(80);
