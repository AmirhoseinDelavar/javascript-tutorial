// get data from local storage
const getTodos = function () {
    const JSONData = localStorage.getItem('todos')
    todos = JSON.parse(JSONData)
    if (todos === null)
        todos = []
}
//

// todo remover by id
function removeTodo(id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    todos.splice(todoIndex,1)
    localStorage.setItem('todos',JSON.stringify(todos))
}
//

// render todos
const searchFilter = {
    searchtext: '',
    hideCompleted: false
}
const RenderNotes = function (todos, searchFilter) {
    // filtering
    const filteredTodos = todos.filter(function (todo) {
        const searchtextIsValid = todo.text.toLowerCase().includes(searchFilter.searchtext.toLowerCase())
        const hidden = searchFilter.hideCompleted && todo.complete
        return searchtextIsValid && !hidden
    })
    //

    // showing items on the list
    document.querySelector('#search-out').innerHTML = ''
    filteredTodos.forEach(function (todo) {
        // creating a div for todo item with checkbox, delbtn, span
        const newtododiv = document.createElement('div')
        const todocheckbox = document.createElement('input')
        const tododelbtn = document.createElement('button')
        const todoanchor = document.createElement('a')

        // checkbox part
        todocheckbox.setAttribute('type','checkbox')
        todocheckbox.checked = todo.complete
        todocheckbox.addEventListener('click',function () {
            todo.complete = todocheckbox.checked
            localStorage.setItem('todos',JSON.stringify(todos))
            RenderNotes(todos,searchFilter)
        })

        // delbtn part
        tododelbtn.textContent = 'x'
        tododelbtn.addEventListener('click',function () {
            removeTodo(todo.id)
            RenderNotes(todos,searchFilter)
        })

        // anchor part
        todoanchor.setAttribute('href',`./edit.html#${todo.id}`)
        todoanchor.textContent = todo.text

        newtododiv.append(todocheckbox,todoanchor,tododelbtn)
        document.querySelector('#search-out').append(newtododiv)
    })
    //

    // todos left
    document.querySelector('#left-todo').innerHTML = ''
    document.querySelector('#left-todo').append(`You Have ${todos.filter(function (todo) {
        return !todo.complete
    }).length} Left`)
    //

}
//

//uuidv4
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}
//

// create and save a new todo
const createnewnode = function (text) {
    const newtodo = {
        id : uuidv4(),
        text: text,
        complete: false
    }
    todos.push(newtodo)
    localStorage.setItem('todos', JSON.stringify(todos))
    return newtodo
}
//
