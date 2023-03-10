let taskList = [
  {
    id: 1,
    description: "Get Coffee & Sweets",
    date: "20-04-2022",
    horaire: "06:00 PM",
    imageUrl:
      "https://imgs.search.brave.com/25GhhXmJjsHn2b31wU745rvYmzhETPUwoyhOB2ZidI/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBhL2I2/L2MyLzBhYjZjMjBm/MDU5NjNhODJhYTQ3/OWRmOTI3ZGQ1YzI0/LmpwZw",
    idUtilisateur: "1",
    etat: true,
  },
  {
    id: 2,
    description: "Compete in Hackerrank",
    date: "13-08-2016",
    horaire: "03:00 AM",
    imageUrl:
      "https://scontent.ftlm1-1.fna.fbcdn.net/v/t31.18172-8/17880741_1614839605211458_8990846832169817664_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=r6VEqOZA1v8AX8--y8M&tn=JAJqdDehW-8iYgtd&_nc_ht=scontent.ftlm1-1.fna&oh=00_AfD5ggCrZ55xBvdlmoEvPr1aOl6AraFjcwPt2jyYgz42_Q&oe=64173223",
    idUtilisateur: "1",
    etat: true,
  },
  {
    id: 3,
    description: "Go to work",
    date: "02-02-2017",
    horaire: "07:00 AM",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvy0a57iixI0O5-IL-C9JSFBlMEq5hA8wRA&usqp=CAU",
    idUtilisateur: "1",
    etat: true,
  },
];

// retourne la liste des taches
const getAllTasks = () => taskList;

// retourne l'indice de la tache qui correpond à l'identifiant id
const findTaskIndex = (id) => taskList.findIndex((task) => task.id === id);

const findTaskById = (id) => taskList.find((task) => task.id === id);

const addTask = (description, date, horaire, imageUrl, idUtilisateur) => {
  const newTask = {
    description,
    date,
    horaire,
    imageUrl,
    idUtilisateur,
    id: taskList.length + 1,
    etat: false,
  };
  taskList.push(newTask);
};

const deleteTaskWithId = (id) => {
  const index = findTaskIndex(id);
  if (index === -1) return;
  taskList.splice(index, 1);
  //taskList[findTaskIndex(id)]= {} // alternativement tombstone O(1)
};

const updateTaskWithId = (id, newTask) => {
  let index = findTaskIndex(id);
  if (index == -1) return;
  taskList[index] = { ...newTask, id };
};

module.exports = {
  getAllTasks,
  addTask,
  findTaskById,
  deleteTaskWithId,
  updateTaskWithId,
};
