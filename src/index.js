document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const PRIORITY = {
    1: "HIGH",
    2: "MEDIUM",
    3: "LOW"
  };
  
  // type a task 
  const formEl = document.getElementById("create-task-form")
  const tasklist = document.getElementById('tasks')
  const task = document.getElementById("new-task-description");


  formEl.addEventListener("submit", event => {
      event.preventDefault();

    const lizard = document.createElement('li')
    lizard.innerText = `${task.value}` 

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "COMPLETED <3"

    deleteButton.addEventListener("click", () => {
      lizard.remove();
      deleteButton.remove();
    })
    tasklist.append(lizard, deleteButton)
  })

  const prioritySpan = document.createElement('span')
  prioritySpan.innerText = PRIORITY[task.priority]


});

