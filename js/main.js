let myTasks = []
const addBtn = document.getElementById("addBtn")
const inputEl = document.getElementById("inputEl")
const taskList = document.getElementById("taskList")

addBtn.addEventListener("click", function(){
   //add task from input
    taskList.innerHTML += "<li>" + inputEl.value + "</li>"
    // hide default message
    document.getElementById("noTasks").style.display = "none"
    }
)
