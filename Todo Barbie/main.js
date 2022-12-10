const todo = document.querySelector('.todo');
const btn = document.querySelector(".submit_btn");
const dailyTask = document.querySelector("#daily-task-input");
const userList = document.querySelector(".daily-task");

todo.addEventListener('submit', (onSubmit) => {
    onSubmit.preventDefault();

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${dailyTask.value}`));
    userList.appendChild(li);

    dailyTask.value = '';

    if(btn.style.background = 'red'){
        setTimeout(() =>btn.style.remove, 2000)
    };
});





