const handleSubmit = function (e) {
    //  invoca la funzione che genera la lista con il nuovo
    createTask();
    //  invoca la funzione che cambia la classe (aggiunge sbarrato)
    addClass();
    //  invoca la funzione che elimina il task
    deleteTask();
}

//  una funzione che genera la lista con il nuovo task
//      agganciarsi nell'html
//      utilizzare template literals per stampare direttamente anche dell'html
//      inputField.value
//      font-awesome -> <i class = "far fa-trash-alt"></i>

function createTask(){
    const inputField = document.querySelector('form input');
    const taskList = document.getElementById("task");
    let newTask = `
    <div class="task">
        <span id="taskname">
            ${inputField.value}
        </span>
        <button class="remove">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
    `
    taskList.innerHTML += newTask;
    inputField.value='';
    
}


//  una funzione che cambia la classe (aggiunge sbarrato)
//      agganciare nell'html
//      for
//      classList.toggle -> text-decoration:line.through (css)

function addClass(){
    let allTask = document.querySelectorAll('.task')
    for(let i = 0; i<allTask.length;i++){
        allTask[i].addEventListener('click',function(){
            allTask[i].classList.add("taskcompleta");
        })
    }
}


//  una funzione che elimina il task
//      aggangiacasi nell'html
//      for
//      remove
function deleteTask(){
    let buttons = document.querySelectorAll('.remove')
    let tasks = document.querySelectorAll('.task')
    for(let i = 0; i<buttons.length;i++){
        buttons[i].addEventListener('click',function(){
            tasks[i].remove();
        })
    }
}


//quando carichi invoca tutte le funzioni (funzioni concatenate)
window.onload = function() {
    let form = document.querySelector('form');
    form.addEventListener('submit',handleSubmit);
}