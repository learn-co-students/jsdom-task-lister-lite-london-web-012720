document.addEventListener("DOMContentLoaded", () => {


  const forma = document.getElementById("create-task-form")
  const newTaskDescription = document.getElementById("new-task-description")
  const task = document.getElementById("tasks")

  forma.addEventListener("submit", event => {
    event.preventDefault();

    const newList = document.createElement("li")
    newList.innerText = `${newTaskDescription.value}`

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "DONE IT ALREADY"

    deleteButton.addEventListener("click", () => {
      newList.remove();
      deleteButton.remove()
    })

    task.append(newList, deleteButton)
    
  })





})
