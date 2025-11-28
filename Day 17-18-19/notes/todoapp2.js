const taskInput = document.querySelector("#taskInput");
const taskDate = document.querySelector("#taskDate");
const taskCategory = document.querySelector("#taskCategory");
const taskPriority = document.querySelector("#taskPriority");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const themeBtn = document.querySelector("#themeBtn");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let isDark = JSON.parse(localStorage.getItem("theme")) || false;

applyTheme();
renderTasks();

// Add task
addBtn.addEventListener("click", () => {
  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push({
    text: taskInput.value,
    date: taskDate.value,
    category: taskCategory.value,
    priority: taskPriority.value,
    completed: false
  });

  taskInput.value = "";
  taskDate.value = "";
  saveTasks();
  renderTasks();
});

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) 
      li.classList.add("completed");

    li.innerHTML = `
      <span>
        ${task.text}
        <small style="font-size:12px; color:gray;"> ${task.date} </small> |
        <small style="color:#2563eb;">${task.category}</small> |
        <small style="color:${
          task.priority === "High"
            ? "red"
            : task.priority === "Medium"
            ? "orange"
            : "green"
        }">${task.priority}</small>
      </span>

      <div class="btns">
        <button class="doneBtn" onclick="toggleComplete(${index})">Done</button>
        <button class="editBtn" onclick="editTask(${index})">Edit</button>
        <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Mark completed
function toggleComplete(i) {
  tasks[i].completed = !tasks[i].completed;
  saveTasks();
  renderTasks();
}

// Edit task
function editTask(i) {
  const newTask = prompt("Edit task:", tasks[i].text);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[i].text = newTask;
    saveTasks();
    renderTasks();
  }
}

// Delete task
function deleteTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  renderTasks();
}


// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}






//Part  3 

// Theme toggle
themeBtn.addEventListener("click", () => {
  isDark = !isDark;
  saveTheme();
  applyTheme();
});

function applyTheme() {
  if (isDark) {
    document.body.classList.add("dark");
    themeBtn.innerText = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark");
    themeBtn.innerText = "🌙 Dark Mode";
  }
}

function saveTheme() {
  localStorage.setItem("theme", JSON.stringify(isDark));
}

