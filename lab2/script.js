"use-strict"

let todoId = 0;
let deletedTodoItem = null;

const asapTodoList = document.getElementById('asap-todo-list');
const urgentTodoList = document.getElementById('urgent-todo-list');
const unimportantTodoList = document.getElementById('unimportant-todo-list');

const addElementEnter = (event) => {
    if (event.key == "Enter") {
        addElement();
    }
}

const addElement = () => {
    const todoInput = document.getElementById("todo-input");
    if(todoInput.value === ""){
        alert("Cannot add an empty note");
        return;
    }
    const selectedList = document.getElementById("todo-list-select");
    //console.log(select.value);
    if(selectedList.value === "select"){
        alert("Please choose a list to add to");
        return;
    }
    
    const todoItem = createTodoItem(todoInput.value, selectedList.value);
    addTodoItem(todoItem);

    todoInput.value = "";
};

const addTodoItem = (todoItem) => {
    switch (todoItem.mode) {
        case "asap":
            asapTodoList.appendChild(todoItem);
            break;
        case "urgent":
            urgentTodoList.appendChild(todoItem);
            break;
        case "unimportant":
            unimportantTodoList.appendChild(todoItem);
            break;
        default:
            console.log("Unexpected list");
    }
}

const createTodoItem = (todoContent, selectedList) => {
    const todoItem = document.createElement('li');
    todoItem.mode = selectedList;
    todoItem.onclick = () => toggleChecked(todoItem);
    todoItem.id = todoId;
    todoId++;

    const todoText = document.createElement('p');
    todoText.className = "todo-content";
    todoText.innerHTML = todoContent;

    
    todoItem.appendChild(todoText);
    todoItem.appendChild(createDate());
    todoItem.appendChild(createDeleteSpan(todoItem));

    return todoItem;
}

const createDeleteSpan = (todoItem) => {
    var span = document.createElement("SPAN");
    span.className = "delete-todo fa fa-trash"; 
    
    span.onclick = (e) => deleteClick(e, todoItem);

    return span;
}

const createDate = () => {
    const p = document.createElement('p');
    p.innerHTML = '';
    p.className = 'date';

    return p;
}

const toggleChecked = (todoItem) => {
    const isChecked = todoItem.classList.toggle('checked');
    const dateContainer = todoItem.getElementsByClassName("date")[0];
    if (!isChecked) {
        dateContainer.innerHTML = '';
        return;
    }

    const date = new Date().toLocaleString();
    dateContainer.innerHTML = date;
}


const deleteClick = (e, todoItem) => {
    e.stopPropagation();
    $('#confirm-button').off('click').click(() => {
        $(`#${todoItem.id}`).remove();
        deletedTodoItem = todoItem;
        closeDialog();
    });
    $('#delete-dialog').show();
}

const closeDialog = () => $('#delete-dialog').hide();

$(document).keypress('Z', (e) => {
    if (!e.ctrlKey || deletedTodoItem === null) {
        return;
    }
    
    addTodoItem(deletedTodoItem);
    deletedTodoItem = null;
})