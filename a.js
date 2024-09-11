const item =document.getElementById("item")
const Box =document.getElementById("TodoBox")
item.addEventListener('keyup',function(e){
    if(e.key == 'Enter'){
addTodo(this.value)
this.value= ""
//Here We Will Clear the Value
    }
})
const addTodo=(item)=>{
const listitem = document.createElement("li")
listitem.innerHTML=`${item}<i class="fa-solid fa-delete-left"></i>`
listitem.addEventListener('click',function(){
    this.classList.toggle(done)
})
listitem.querySelector('i').addEventListener('click',function(){
    listitem.remove()
})
Box.appendChild(listitem)
}