let todos = []
// Loading the todos from disk
getTodos()
//

// Creating search field :
document.querySelector('#search-in').addEventListener('input', function (e) {
    searchFilter.searchtext = e.target.value
    RenderNotes(todos, searchFilter)
})
//

// pre-render list items
RenderNotes(todos, searchFilter)
//

// Creating Newtodo btn
document.querySelector('#new-todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    createnewnode(e.target.elements.todotext.value)
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