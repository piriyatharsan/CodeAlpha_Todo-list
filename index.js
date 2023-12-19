const toDoInput = document.getElementById("input")
const toDoBtn = document.getElementById("btn")
const listContainer = document.getElementById("list-container")

let list = []

toDoBtn.addEventListener('click',function(){
    if(toDoInput.value === ''){
        alert("must type.....")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = toDoInput.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.classList.add("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
       
    }
    toDoInput.value = ""
    saveData()
})

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }

})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function displayTodoList(){
    listContainer.innerHTML = localStorage.getItem("data")
}
displayTodoList()