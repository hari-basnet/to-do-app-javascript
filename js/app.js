
const todos = [{
    text: 'Order cat food',
    completed: false
},{
    text: 'clean kitchen',
    completed: false
},{
    text: 'buy food',
    completed: true
},{
    text: 'Do work',
    completed: true
},{
    text: 'exercise',
    completed: true
}];

// how many todos left


// populate the todos list 
const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters){
    const filteredTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    const incompleteTodos = filteredTodos.filter( todo =>{
        return !todo.completed
    })

    document.querySelector('#todo-list').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todo-list').appendChild(summary);

    filteredTodos.forEach( todo =>{
        const para = document.createElement('p');
        para.textContent = `${todo.text}`;
        document.querySelector('#todo-list').appendChild(para);
    })

}

renderTodos(todos, filters);

document.querySelector('#add-btn').addEventListener('click', function(e){
    e.target.textContent = 'add button was clicked';
})

document.querySelector('#remove-btn').addEventListener('click', function(e){
    e.target.style.background = 'red';
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    console.log(e.target.value);
    renderTodos(todos, filters);
})


















