var list=document.getElementById("list");



function addTodo(){

    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)


    var delbtn = document.createElement("Button")
    var deltext =document.createTextNode("Delete")

    delbtn.setAttribute("class","btn");
    delbtn.setAttribute("onclick","deleteitem(this)")
    delbtn.appendChild(deltext);


    var editbtn = document.createElement("button");
    var edittext = document.createTextNode("Edit")
    editbtn.setAttribute("onclick","editItem(this)")


  
    editbtn.appendChild(edittext)

    li.appendChild(editbtn)
    li.appendChild(delbtn)

    todo_item.value ="";
    list.appendChild(li)


}


function deleteitem(e){

    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML =""
}

function editItem(e){

    var editValue = prompt("Enter edit value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editValue
    


}