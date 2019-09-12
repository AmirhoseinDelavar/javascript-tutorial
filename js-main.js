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
document.querySelector('#new-todo').addEventListener('click', function (e) {
    const node = createnewnode('')
    location.assign(`./edit.html#${node.id}`)
    RenderNotes(todos, searchFilter)
})
//

// Creating the hide-completed-checkbox
document.querySelector('#hide-completed-ch').addEventListener('change', function (e) {
    searchFilter.hideCompleted = e.target.checked
    RenderNotes(todos, searchFilter)
})
//