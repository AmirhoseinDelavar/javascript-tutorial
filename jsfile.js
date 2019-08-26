// making dynamic contents on html
const todos = [{
    text: 'eat',
    complete: false
}, {
    text: 'walk',
    complete: true
}, {
    text: 'run',
    complete: false
}]

// Creating search field :
const searchFilter ={
    searchtext : ''
}
document.querySelector('#search-in').addEventListener('input',function (e) {
    searchFilter.searchtext = e.target.value
    SearchEngine(todos, searchFilter)
})
const SearchEngine = function (todos, searchFilter) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(searchFilter.searchtext.toLowerCase())
    })
    document.querySelector('#search-out').innerHTML = ''
    filteredTodos.forEach(function (todo) {
        const todotag = document.createElement('p')
        todotag.textContent = todo.text
        document.querySelector('#search-out').append(todotag)
    })
}
//

// Creating Newtodo btn
document.querySelector('#new-todo-form').addEventListener('submit',function (e) {
    e.preventDefault();
    const newtodo = {
        text: e.target.elements.todotext.value,
        complete: false
    }
    todos.push(newtodo)
    e.target.elements.todotext.value = ''
    SearchEngine(todos,searchFilter)
})
//

// Creating the show-checkbox
document.querySelector('#show-list-in').addEventListener('change', function (e) {
    console.log(e.target.checked)
    if (e.target.checked)
        SearchEngine(todos,searchFilter)
    else
        document.querySelector('#search-out').innerHTML = ''

})
//
