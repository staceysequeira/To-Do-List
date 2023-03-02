/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.getElementById("todo-form").addEventListener("submit", e => {
  e.preventDefault();
  const todoInput = document.getElementById("form-inputs");
  const todoList = document.getElementById("todo-list");

  if (!todoInput.value.trim()) {
    alert("You must type a value");
  } else {
    const newTodo = document.createElement("li");
    newTodo.innerHTML =
      todoInput.value +
      '<button type= "button" class="btn btn-outline-danger btn-small float-end delete">Delete</button>';

    newTodo.addEventListener("click", e => {
      e.target.classList.toggle("checked");
    });

    newTodo.classList.add("list-group-item");
    todoList.appendChild(newTodo);
    todoInput.value = " ";
  }
});

document.getElementById("todo-list").addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
