const inputBox=document.getElementById("input-box");
const ListContainer=document.getElementById("list-container");
function addtask(){
    if(inputBox.value ===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        ListContainer.appendChild(li);
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span);

    
    }
    inputBox.value='';
}


//to remove item from list

ListContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);
