(() => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = {
      description: event.target.elements["new-task-description"].value,
    };
    buildToDo(task);
    event.target.reset();
  });

  function buildToDo(task) {
    const taskList = document.querySelector("#tasks");
    const newTask = document.createElement("li");
    newTask.textContent = task.description;
    taskList.appendChild(newTask);
  }
})();
