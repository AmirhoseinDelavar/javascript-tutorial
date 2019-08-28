// get data from local storage
const getTodos = function () {
    const JSONData = localStorage.getItem('todos')
    todos = JSON.parse(JSONData)
    if (todos === null)
        todos = []
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
        const todotag = document.createElement('p')
        todotag.textContent = todo.text
        document.querySelector('#search-out').append(todotag)
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

// create and save a new todo
const createnewnode = function (text) {
    const newtodo = {
        text: text,
        complete: false
    }
    todos.push(newtodo)
    localStorage.setItem('todos', JSON.stringify(todos))
}
//
