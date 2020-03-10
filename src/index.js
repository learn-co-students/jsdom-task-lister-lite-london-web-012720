document.addEventListener("DOMContentLoaded", () => {
  
 const form = document.querySelector("form")
 const theInput = document.querySelector("#new-task-description")
 const theList = document.querySelector("#tasks")

 const btn = document.querySelector("#tasks > li > button")

 form.addEventListener("submit", function(event) 
  {
    event.preventDefault();
    
    let li = document.createElement("li");  
    let btn = document.createElement("button"); 

    li.innerHTML = theInput.value
    btn.innerHTML = "x"

    theList.appendChild(li).appendChild(btn);
    //makes make point and X for deletion


    theInput.value = "";

    btn.addEventListener("click", function{ 
      this.parentElement.remove()
    })

  })

 

});
