"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const todoDB = {
        tasks: [
            "Go home",
            "Make Bed"
        ]
    };

    //Selectors
    const todoInput = document.querySelector('.todo-input'),
          todoForm = document.querySelector('form'),
          todoContainer = document.querySelector('.todo-container');

    //Event Listeners
    todoForm.addEventListener('submit', function (event) {
        //Prevent form form submitting (Refreshing)
        event.preventDefault();

        let newTask = todoInput.value;

        if (newTask) {
            if (newTask.length > 30) {
                newTask = newTask.substr(0, 30) + '...';
            }
            todoDB.tasks.push(newTask);
            createTodoList(todoDB.tasks, todoContainer);
        }
        event.target.reset();
    });


    //Functions
    function createTodoList(tasks, container) {
        container.innerHTML = '';
        
        tasks.forEach((element) => {
            
            container.innerHTML += `
                <li class="todo-task">
                    ${element}
                    <div class="todo-icons">
                        <button class="delete"><i class="fas fa-trash-alt"></i></button>
                        <button class="checked"><i class="fas fa-check"></i></button>
                    </div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                console.log(todoDB.tasks.splice(i, 1));

                createTodoList(todoDB.tasks, container);
            });
        });

        document.querySelectorAll('.checked').forEach((checkBtn) => {
            checkBtn.addEventListener('click', (e) => {
                e.target.classList.toggle('green');
            });
        });
    }

    createTodoList(todoDB.tasks, todoContainer);
});