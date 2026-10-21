document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form  = document.querySelector("#create-task-form");
  form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const input = document.querySelector("#new-task-description");
    const taskList = document.querySelector("#tasks");
    const newTask = document.createElement("li");
    newTask.textContent = input.value;
    taskList.appendChild(newTask);
    input.value = "";
  })

  function buildToDo(){
    return fetch("http://localhost:3000/tasks")
    .then(response => response.json())
    .then(tasks => {
      const taskList = document.querySelector("#tasks");
      tasks.forEach(task => {
        const newTask = document.createElement("li");
        newTask.textContent = task.description;
        taskList.appendChild(newTask);
      });
    })
  }
});
