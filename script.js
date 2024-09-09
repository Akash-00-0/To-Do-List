const inputBox=document.getElementById("input_box");
const listcointainer=document.getElementById("list_cointainer");
function addTask(){
    if(inputBox.value==='')
        {
            alert("You must write something");
        }
        else{
            let li=document.createElement("li");
            li.innerHTML=inputBox.value;
            listcointainer.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        inputBox.value="";
        saveData();
}
listcointainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
        {
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName==="SPAN")
            {
                e.target.parentElement.remove();
                saveData();
            }
},false);
function saveData(){
    localStorage.setItem("data",listcointainer.innerHTML);
}
function showTask(){
    listcointainer.innerHTML=localStorage.getItem("data");
}
showTask();