
const textField = document.getElementById("new-task-description")
let ul = document.getElementById("tasks")
let list = [];


document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("submit", function(event) {
    event.preventDefault()
    element = document.createElement("li");
    element.innerHTML = `${textField.value}`;
    ul.append(element);
    textField.value = " ";

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener("click", () => {
      deleteButton.parentElement.remove();
    })
   element.append(deleteButton)
  })

});

