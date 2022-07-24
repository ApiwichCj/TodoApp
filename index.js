function addTodo(){

    let input = document.getElementById('inputtodo').value;
    let newli = document.createElement('li');
    let node = document.createTextNode(input);
    newli.className = "list-group-item";
    newli.appendChild(node);
    let elist = document.getElementById('todolist');

    

    elist.appendChild(newli);
    elist.appendChild(elbutton);
}

function delTodo(){
    let input = document.getElementById('inputtodo').value;
    this.parentElement.removeChild(this)
}
