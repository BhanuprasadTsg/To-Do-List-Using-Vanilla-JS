
const ul = document.querySelector('#list');
const add= document.querySelector('#add');
add.onclick = function(e){
    e.preventDefault();
    const listitem = document.querySelector('#listitem');
    const li= document.createElement('li');
    li.className = "list";
    li.innerHTML = listitem.value;
    const bt = document.createElement('button');
    bt.className = "close";
    bt.innerHTML = "\u00D7";
    li.appendChild(bt);
    ul.appendChild(li);
    listitem.value="";
    li.addEventListener("click", (e) =>{
        e.target.style.textDecoration ="line-through";
    })
    bt.addEventListener("click",(e) => {
        e.preventDefault();
       e.target.parentElement.style.display = "none";     
    }) 
};
console.log(listitem.value);
