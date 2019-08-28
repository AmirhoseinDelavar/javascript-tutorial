// Loading the todos from disk
let todos = []
const JSONData = localStorage.getItem('todos')
todos = JSON.parse(JSONData)
if (todos === null)
    todos = []
//

// Creating search field :
const searchFilter = {
    searchtext: '',
    hideCompleted: false
}
document.querySelector('#search-in').addEventListener('input', function (e) {
    searchFilter.searchtext = e.target.value
    RenderNotes(todos, searchFilter)
})
const RenderNotes = function (todos, searchFilter) {
    const filteredTodos = todos.filter(function (todo) {
        const searchtextIsValid = todo.text.toLowerCase().includes(searchFilter.searchtext.toLowerCase())
        const hidden = searchFilter.hideCompleted && todo.complete
        return searchtextIsValid && !hidden
    })
    document.querySelector('#search-out').innerHTML = ''
    filteredTodos.forEach(function (todo) {
        const todotag = document.createElement('p')
        todotag.textContent = todo.text
        document.querySelector('#search-out').append(todotag)
    })

    // todos left
    document.querySelector('#left-todo').innerHTML = ''
    document.querySelector('#left-todo').append(`You Have ${todos.filter(function (todo) {
        return !todo.complete
    }).length} Left`)
    //

}
//

RenderNotes(todos, searchFilter)

// Creating Newtodo btn
document.querySelector('#new-todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const newtodo = {
        text: e.target.elements.todotext.value,
        complete: false
    }
    todos.push(newtodo)
    localStorage.removeItem('todos')
    localStorage.setItem('todos',JSON.stringify(todos))
    e.target.elements.todotext.value = ''
    RenderNotes(todos, searchFilter)
})
//


// Creating the hide-completed-checkbox
document.querySelector('#hide-completed-ch').addEventListener('change', function (e) {
    searchFilter.hideCompleted = e.target.checked
    RenderNotes(todos, searchFilter)
})
//