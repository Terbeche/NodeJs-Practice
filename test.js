const print = (message, val) =>
  console.log(message, "\n", val, "\n#############");

const {
  getAllTasks,
  addTask,
  findTaskById,
  deleteTaskWithId,
  updateTaskWithId,
} = require("./model/task");

print("Liste de taches actuelles:", getAllTasks());

addTask(
  "Go shopping",
  "13-06-2022",
  "10:30 AM",
  "https://media.wired.com/photos/5c9040ee4950d24718d6da99/1:1/w_1800,h_1800,c_limit/shoppingcart-1066110386.jpg",
  1
);

print("Liste de taches après ajout:", getAllTasks());

print("Tache n° 2:", findTaskById(2));
const task = findTaskById(2);

deleteTaskWithId(2);
print("Liste de taches après supprssion:", getAllTasks());
updateTaskWithId(1, task);
print("Liste de taches après la mise à jour de la tache 1:", getAllTasks());
deleteTaskWithId(5);
