const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!!")        
    }
    else {
        let field = document.createElement("input");
        field.type = "checkbox";

        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        let now = new Date();
        let day = String(now.getDate())
        let fullDay = day.padStart(2, "0")
        let month = String(now.getMonth() + 1)
        let fullMonth = month.padStart(2, "0")
        let year = now.getFullYear()

        let minutes = String(now.getMinutes())
        let fullMinutes = minutes.padStart(2, "0")
        let hours = now.getHours()

        let date = (`${fullDay}.${fullMonth}.${year},  ${hours}:${fullMinutes}`)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        let small = document.createElement("small");
        small.textContent = date
        li.appendChild(small)
        li.prepend(field)
    }


    inputBox.value = "";
    saveData();
}

inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter" ) {
        addTask();
    }
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "checkbox") {
        e.target.parentElement.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}


showTask();
