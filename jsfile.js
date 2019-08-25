// // selecting the tags in html
// const c = document.querySelector('p')
// console.log(c)
//
// // removing operation on html tags
// const a = document.querySelectorAll('p').forEach(function (item, index) {
//     if (item.textContent.includes('the'))
//         item.remove()
// })

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

// const countToDoList = document.createElement('p')
// countToDoList.textContent = `Number of todolists total items ${todos.length}`
// document.querySelector('body').append(countToDoList)

// const countuncompleted = document.createElement('p')
// countuncompleted.textContent = `Number of todo items ${todos.filter(function (item) {
//     return !item.complete
// }).length}`
// document.querySelector('body').append(countuncompleted)

// todos.forEach(function (item) {
//     const newpara = document.createElement('p')
//     newpara.textContent = item.text
//     document.querySelector('body').append(newpara)
// })

// // input usage
// document.querySelector('#new-todo-in').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })

// // button usage
// document.querySelector('button.create-button#new-todo-button').addEventListener('click', function (e) {
//     console.log(`${e},buttun clicked`)
// })

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
