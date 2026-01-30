let Addbtn = document.querySelector("#addbtn");
let todoList = document.querySelector("ul");
let inputBox = document.querySelector("input");

let editTodo = null;

inputBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  let inpText = inputBox.value.trim();
  if (inpText.length <= 0) {
    alert("You must write something within a todo");
    return false;
  }

  //   Edit Button Functionality
  if (Addbtn.innerText === "Edit") {
    editLocalTodo(editTodo.target.previousElementSibling.innerHTML);

    editTodo.target.previousElementSibling.innerHTML = inpText;
    Addbtn.innerText = "Add";
    inputBox.value = "";
  }
   else {
    // Adding ListItem in Todo
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = inpText;
    li.appendChild(p);

    // Editing btn in Todo
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.style.color = "green";
    editBtn.style.margin = "10px";
    editBtn.classList.add("btn");
     li.appendChild(editBtn);

    // Deleting btn in Todo
    let delBtn = document.createElement("button");
    delBtn.innerText = "Remove";
    delBtn.style.color = "red";
    delBtn.classList.add("btn");
     li.appendChild(delBtn);

    todoList.appendChild(li);
    inputBox.value = "";

    savetoLocalTodo(inpText);
  }
}

function updateTodo(event) {
  if (event.target.innerText === "Remove") {
    todoList.removeChild(event.target.parentElement);
    delLocalTodo(event.target.parentElement);
  }

  if (event.target.innerText === "Edit") {
    inputBox.value = event.target.previousElementSibling.innerHTML;
    inputBox.focus();
    Addbtn.innerText = "Edit";
    editTodo = event;
  }
}

function savetoLocalTodo(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } 
  else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodo() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } 
  else {
    todos = JSON.parse(localStorage.getItem("todos"));

    todos.forEach((todo) => {
      // Adding ListItem in Todo
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.innerText = todo;
      li.appendChild(p);

      // Editing btn in Todo
      let editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.style.color = "green";
      editBtn.style.margin = "10px";
      editBtn.classList.add("btn");

      // Deleting btn in Todo
      let delBtn = document.createElement("button");
      delBtn.innerText = "Remove";
      delBtn.style.color = "red";
      delBtn.classList.add("btn");

      li.appendChild(editBtn);
      li.appendChild(delBtn);

      todoList.appendChild(li);
    });
  }
}

function delLocalTodo(todo) {
    let todos ; 
    if(localStorage.getItem("todos") === null) {
        todos = [] ;
    }  
    else {
        todos = JSON.parse(localStorage.getItem("todos")) ; 
    }

    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todoIndex);

}

function editLocalTodo(todo) {
  let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}

Addbtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);
document.addEventListener("DOMContentLoaded", getLocalTodo);
