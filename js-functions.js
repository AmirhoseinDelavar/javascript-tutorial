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
        // creating a div for todo item with checkbox, delbtn, span
        const newtododiv = document.createElement('div')
        const todocheckbox = document.createElement('input')
        const tododelbtn = document.createElement('button')
        const todotag = document.createElement('span')

        todocheckbox.setAttribute('type','checkbox')
        tododelbtn.textContent = 'x'
        todotag.textContent = todo.text

        newtododiv.append(todocheckbox,todotag,tododelbtn)
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
