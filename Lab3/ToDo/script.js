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
    tasks.push(message)
    createTask()
}

function createTask(){
    let ul = document.getElementById("list")
    ul.innerHTML = ""
    tasks.forEach((task, index) => {
        let li = document.createElement("li"), btn = document.createElement("button");
        li.innerHTML = `    
            <li>
                <div class="mainli">
                    <div class="aaa">
                        <input type="checkbox"><p>${task}</p>
                    </div>
                </div>
            </li>
        `
        btn.innerText = "Del";
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