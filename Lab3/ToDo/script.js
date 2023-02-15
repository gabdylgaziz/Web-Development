var tasks = []

Window.onload = getItems()

 
function getItems(){
    const got = localStorage.getItem('todo');
    if(got){
        tasks = JSON.parse(got);
    }
    createTask()
}


function addTask(){
    let message = document.getElementById("taskInput").value
    if(message){
        tasks.push({
            value: message,
            checked: false
        })
    }
    console.log(tasks)
    createTask()
}

function createTask(){
    let ul = document.getElementById("list")
    ul.innerHTML = ""
    tasks.forEach((task, index) => {
        let li = document.createElement("li"), btn = document.createElement("button");
        li.innerHTML = `    
            <div class="mainli">
                <div class="aaa">
                    <input type="checkbox"><p>${task.value}</p>
                </div>
            </div>
        `
        let img = document.createElement('img');
        img.src = './delete.png';
        btn.appendChild(img)
        btn.addEventListener("click", () => {
            delTask(index);
        });
        li.appendChild(btn);
        ul.appendChild(li)
    })
    localStorage.setItem('todo', JSON.stringify(tasks));
}

function delTask(index){
    tasks.splice(index, 1);
    createTask();
}

function checked(index){
    tasks.splice(index, 1);
    createTask();
}