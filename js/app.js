
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
const incompleteTodos = todos.filter( todo =>{
    return !todo.completed
})
const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('#message').appendChild(summary);

// populate the todos list 

todos.forEach( todo =>{
    const para = document.createElement('p');
    para.textContent = `${todo.text}`;
    document.querySelector('#todo-list').appendChild(para);
})

document.querySelector('#add-btn').addEventListener('click', function(e){
    e.target.textContent = 'add button was clicked';
})

document.querySelector('#remove-btn').addEventListener('click', function(e){
    e.target.style.background = 'red';
})




















