class todoList{
    constructor(){
        this.editingIndex = -1;
        this.addButton = document.getElemenyById('addButton');
        this.todoInput = document.getElementById('todoInput');
        this.todoList = document.getElementById('todoList');

        this.addButton.addEventListener('click', () => this.addOrUpdateTask());
        this.todoList.addEventListener('click', (e) => {
            const action = e.target.classList.contains('removeButton') ? 'remove' : e.target.classList.contains('editButton') ? 'edit' : e.taget.classList.contains('doneButton') ? 'done' : null;
            if (action) this [action + 'Task'](e);
                });
            }
            addOrUpdateTask(){
                const taskTest = this.todoInput.value.trim();
                if (taskTest){
                    this.editingIndex === -1 ? this.addTask(taskText) : this.updateTask(taskText);
                    this.todoInput.value = '';
                }
            }
            addTask(taskText){
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item todo-item';
                listItem.innerHTML = `
                    <div class="card">
                    <span class="task-text">${taskText}</span>
                    <span class="timestamp" style="display: block; margin-top: 0.5rem; color: gray;">Date Added: ${new Date().toLocaleString()}</span>
                    <div style="margin-top: 0.5rem;">
                        <button class="btn btn-success btn-sm doneButton">Done</button>
                        <button class="btn btn-warning btn-sm editButton">Edit</button>
                        <button class="btn btn-danger btn-sm removeButton">Remove</button>
                    </div>
                     </div>
                `;
                this.todoList.appendChild(listItem);
            }
            doneTask(event) {
                const taskItem = event.target.closest('.todo-item');
                const taskText = taskItem.querySelector('.task-text');
                taskText.classList.toggle('completed'); 
        
                const buttons = taskItem.querySelectorAll('button');
                buttons.forEach(button => button.disabled = true);
            }
            updateTask(taskText) {
                this.todoList.children[this.editingIndex].querySelector('.task-text').textContent = taskText;
                this.resetEditing();
            }
            removeTask(event) {
                this.todoList.removeChild(event.target.closest('todo-item'));
            }
            editTask(event){
                const taskItem = event.target.closest('todo-item');
                this.todoInput.value = taskItem.querySelector(' .task-text').textContent;
                this.editingIndex = Array.form(this.todoList.children).indexOf(taskItem);
                this.addButton.textContent = 'Update' ;
            }
            resetEditing(){
                this.editingIndex = -1;
                this.addButton.textContent = 'Add';
            }
        }
        