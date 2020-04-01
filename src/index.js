document.addEventListener("DOMContentLoaded", () => {
  
    //elements
    const submitButton = document.querySelector("#create-task-form") 
    const listUl = document.querySelector("#tasks")


    // event-listeners
    submitButton.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.querySelector("#new-task-description");
        const listLi = document.createElement("li");

        const deleteButton = document.createElement("button")
        deleteButton.innerText = "X"

        listLi.innerText = input.value;
        

        listLi.append(" ");
        listLi.append(deleteButton);
        listUl.append(listLi);
        e.target.reset();

        deleteButton.addEventListener("click", e => {
            e.target.parentElement.remove();
            // debugger
        })

    })

})



});
