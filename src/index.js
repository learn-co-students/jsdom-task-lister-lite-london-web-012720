document.addEventListener("DOMContentLoaded", () => {


  const forma = document.getElementById("create-task-form")
  const task = document.getElementById("new-task-description")
  const newTask = document.getElementById("tasks")

  forma.addEventListener("submit", event => {
    event.preventDefault();

    const newList = document.createElement("li")
    newList.innerText = `${task.value}`

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "DONE IT ALREADY"

    deleteButton.addEventListener("click", () => {
      newList.remove();
      deleteButton.remove()

      

    })
    newTask.append(newList, deleteButton)
    
  })


})
