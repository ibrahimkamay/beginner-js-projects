const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const btn = document.querySelector('#btn');



function addTask(){
    if(inputBox.value === '') {
        alert("Boş değer girilemez")
    }
    else {
        let newTask = document.createElement("li");
        newTask.innerHTML = `<span style="cursor:pointer;"><i id="deneme" class="fa fa-trash" ></i></span> ${inputBox.value}`;
        listContainer.appendChild(newTask);
      
}
        inputBox.value = "";
        saveData();
}

inputBox.addEventListener('keyup',(e)=>{
     if(e.keyCode === 13){
         btn.click(); // triggering click if `keycode === 13`
    }
  })

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false) 

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();