const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDosKey = "todos";
let toDos = loadToDos();

function loadToDos() {
    const toDosInLocalStorage = localStorage.getItem(toDosKey);

    if (toDosInLocalStorage) {
        const parsedToDos = JSON.parse(toDosInLocalStorage);
        parsedToDos.forEach(paintToDo);
        return parsedToDos;
    }

    return [];
}

function saveToDos() {
    localStorage.setItem(toDosKey, JSON.stringify(toDos));
}

function deleteTodo(event) {
    // toDoList.removeChild(event.target.parentElement);
    const li = event.target.parentElement;

    // function filterTodo(todo) {
    //     return String(todo.id) !== li.id
    // }
    // toDos = toDos.filter(filterTodo);
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveToDos();

    li.remove();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

    const button = document.createElement("button");
    button.innerText = "✔";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);