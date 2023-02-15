function addTask(){
    let message = document.getElementById("taskInput").value
    if(message){
        let ul = document.getElementById("list"), li = document.createElement("li")
        li.innerHTML = `    
            <li>
                <div class="mainli">
                    <div>
                        <input type="checkbox">${message}
                    </div>
                    <button>Del</button>
                </div>
            </li>
        `
        ul.appendChild(li)
    }
}