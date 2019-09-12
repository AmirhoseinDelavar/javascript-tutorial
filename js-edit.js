// getting the id from URL
const id = location.hash.substring(1)
let todos
getTodos()
todo = todos.find(function (todo) {
    return id === todo.id
})

// select input on edit.html
document.querySelector('#note-edit').value = todo.text
// change listener
document.querySelector('#set-edit').addEventListener('click',function (e) {
    todo.text = document.querySelector('#note-edit').value
    localStorage.setItem('todos',JSON.stringify(todos))
    location.assign("./index.html")
})