document.addEventListener("DOMContentLoaded", () => {

  const PRIORITY = {
    1: "HIGH",
    2: "MEDIUM",
    3: "LOW"
  };

  const forma = document.getElementById("create-task-form")
  const task = document.getElementById("new-task-description")
  const newTask = document.getElementById("tasks")

  forma.addEventListener("submit", event => {
    event.preventDefault();

    const newList = document.createElement("li")
    newList.innerText = `${task.value}`

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "DONE"

    deleteButton.addEventListener("click", () => {
      newList.remove();
      deleteButton.remove()
    })
    newTask.append(newList, deleteButton)
  })

  const prioritySpan = document.createElement("span")
  prioritySpan.innerText = PRIORITY[task.priority]

})
