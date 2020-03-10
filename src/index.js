document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.querySelector("form");
  const textInput = document.querySelector("#new-task-description");
  const tasks = document.querySelector("#tasks");

  formEl.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let li = document.createElement("li");
    li.innerHTML = textInput.value;
    let btn = document.createElement("button");
    btn.innerHTML = "x";
    tasks.appendChild(li).appendChild(btn);
    textInput.value = "";

    btn.addEventListener("click", () => {
      btn.parentElement.remove();
    });
  });
});
