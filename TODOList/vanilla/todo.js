//Selecteur


let taskInputSelector = document.querySelector("input");
let validationButtonSelector = document.querySelector("button");
let unorderedSelector = document.querySelector("ul");

validationButtonSelector.addEventListener("click", function(){
    createNewTask();
});


function createNewTask(){
    let newTask = document.createElement("li");
    newTask.textContent = taskInputSelector.value;
    unorderedSelector.append(newTask);
}
