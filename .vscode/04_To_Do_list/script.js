const input = document.getElementById("track-text");
const add_task = document.getElementById("addTask");
const task_list = document.getElementById("tasklist");

add_task.addEventListener("click", () => {
    const taskTest = input.value.trim();
    if (taskTest === "") {
        alert("please enter a task");
        return; 
    }
    const li = document.createElement("li");
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const delete_event = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.setAttribute('aria-label', 'Mark task as completed');
    span.textContent = taskTest;
    delete_event.textContent = 'Delete';
    delete_event.type = 'button';
    delete_event.setAttribute('aria-label', 'Delete task');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.classList.add('completed');
        } else {
            span.classList.remove('completed');
        }
    });

    delete_event.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delete_event);

    task_list.appendChild(li);

    input.value = '';
});