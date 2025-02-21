let todoList = [
    {
        item: 'Buy Milk',
        dueDate: '4/10/2024'
    },
    {
        item: 'Go to college',
        dueDate: '4/10/2024'
    },
];

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDAte = dateElement.value;
    todoList.push({ item: todoItem, dueDate: todoDAte }
    );
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `
    
    <span>${item}</span>
       <span>${dueDate}</span>
       <button class="btn-delete" onclick = "todoList.splice(${i}, 1);
       displayItems();">Delete</button>
    
    `;
    }

    containerElement.innerHTML = newHtml;

}

