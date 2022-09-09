let listKharid = ['MOz','Havij','KHiar','Sib'];
let todoList = document.getElementById('todo-list');

function renderToDo(){
    todoList.innerHTML = "";
    for(let i = 0; i < listKharid.length; i++){
        todoList.innerHTML += "<li>" + listKharid[i] + " <a href = '#' onclick = 'deleteTodo(" + i +")'>(Delet)</a> </li>";
        }
}


function addToDo(){
    let voroodi = document.getElementById('voroodi');
    listKharid.push(voroodi.value);
    voroodi.value = "";
    renderToDo();
}

function deleteTodo(index){
    listKharid.splice(index,1);
    renderToDo();
}

renderToDo();
