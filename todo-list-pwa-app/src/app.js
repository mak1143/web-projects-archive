const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const listEl = document.querySelector(".list");
const dateEl = document.getElementById("date");
const incompleteList = document.getElementById("incomplete-list");
const completedList = document.getElementById("completed-list");
const taskCount = document.getElementById('task-count')




// incompleteList.textContent = "";
//   completedList.textContent = "";
//   let incomplete = 0;
//   let completed = 0;


let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");



let list = JSON.parse(localStorage.getItem("list"));
console.log(list)
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }

  const liEl = document.createElement("li");
  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  
  liEl.innerText = newTask;
  listEl.appendChild(liEl);
  inputEl.value = "";
  console.log(liEl)

  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `
  <i class="fas fa-check-square">
  `;
  liEl.appendChild(checkBtnEl);

  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `
  <i class="fas fa-trash"></i>
  `;
  liEl.appendChild(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}

function updateDate() {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  dateEl.textContent = today.toLocaleDateString(undefined, options);
}

updateDate();

// function renderTasks() {
//   
//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
    
//     const icon = document.createElement("i");
//     icon.className = "material-icons";
//     icon.textContent = task.icon;
  

//     const title = document.createElement("span");
//     title.textContent = task.title;
     
//     li.appendChild(icon);
//     li.appendChild(title);
//     console.log(li)

//     li.onclick = () => toggleTask(index);
//     if (task.completed) {
//       li.style.textDecoration = "line-through";
//       completedList.appendChild(li);
//       completed++;
//     } else {
//       incompleteList.appendChild(li);
//       incomplete++;
//     }
//   });
//   taskCount.textContent = `${incomplete} incomplete, ${completed} completed`;
// }

