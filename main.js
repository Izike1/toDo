const toDoList = []
const form = document.getElementById('form')

const addToDo = (text) => {
    const toDo = {
        text,
        id: Date.now()
    }

    toDoList.push(toDo)
    toDoListVisible(toDo)
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const input = document.querySelector('.input');

    const text = input.value.trim();
    if (text != '') {
        addToDo(text);
        input.value = '';
        input.focus();
    }
})

const toDoListVisible = (toDoList) => {
    const list = document.querySelector('.list')
    const node = document.createElement('li');

    node.innerHTML = `
        <li class="list-item">name = ${toDoList.text}</li>
        <li class="list-item">id = ${toDoList.id}</li>
    `
    list.append(node)
}

