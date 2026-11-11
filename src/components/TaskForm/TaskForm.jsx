
    import './TaskForm.css';
    function TaskForm({ onSubmit, onCancel, initialTask }) {
    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
  
        const newTask = {
        title: formData.get('title'),
        description: formData.get('description'),
        priority: formData.get('priority'),
        dueDate: formData.get('dueDate'),
        status: formData.get('status'),
        };

        onSubmit(newTask);
        event.target.reset();
    }
    

    return (
        <form className="task-form" onSubmit={handleSubmit}>
        <h3>{initialTask ? 'Edit Task' : 'Add New Task'}</h3>

        <label>Task Title</label>
        <input
        name="title"
    type="text"
    placeholder="Enter task title"
    defaultValue={initialTask?.title || ''}
    required
        />

        <label>Description</label>
        <textarea
            name="description"
            placeholder="Describe your task"
            rows="3"
            defaultValue={initialTask?.description || ''}
        />

        <label>Priority</label>
        <select name="priority" defaultValue={initialTask?.priority || 'Medium'}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>

        <label>Due Date</label>
        <input name="dueDate" type="date" defaultValue={initialTask?.dueDate || ''} />

        <label>Status</label>
        <select name="status" defaultValue={initialTask?.status || 'todo'}>
            <option value="todo">To Do</option>
            <option value="progress">In Progress</option>
            <option value="done">Done</option>
        </select>

        <div className="form-actions">
            <button type="button" onClick={onCancel}>
            Cancel
            </button>

        <button type="submit" className="primary-button">
    {initialTask ? 'Save Changes' : 'Add Task'}
    </button>
        </div>
        </form>
    );
    }

    export default TaskForm;
