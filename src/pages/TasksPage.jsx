
import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';

const sampleTasks = [
  {
    id: 1,
    title: 'Design landing page',
    description: 'Create the initial homepage design.',
    priority: 'High',
    dueDate: 'Nov 12',
    status: 'todo',
  },
  {
    id: 2,
    title: 'Study React Hooks',
    description: 'Practice useEffect and useState.',
    priority: 'Medium',
    dueDate: 'Nov 13',
    status: 'todo',
  },
  {
    id: 3,
    title: 'Build navbar',
    description: 'Finish the responsive navigation.',
    priority: 'High',
    dueDate: 'Nov 11',
    status: 'progress',
  },
  {
    id: 4,
    title: 'Initialize project',
    description: 'Create the React application.',
    priority: 'Low',
    dueDate: 'Nov 10',
    status: 'done',
  },
];

const columns = [
  { id: 'todo', title: 'To Do', color: 'orange' },
  { id: 'progress', title: 'In Progress', color: 'blue' },
  { id: 'done', title: 'Done', color: 'green' },
];

function TasksPage({ search }) {
 const [tasks, setTasks] = useState(() => {
  try {
    const savedTasks = localStorage.getItem('taskflow-tasks');
    return savedTasks ? JSON.parse(savedTasks) : sampleTasks;
  } catch (error) {
    console.error('Failed to load tasks:', error);
    return sampleTasks;
  }
});
useEffect(() => {
  localStorage.setItem('taskflow-tasks', JSON.stringify(tasks));
}, [tasks]);
  const [showForm,setShowForm]=useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask=(newTask)=>{
     const task = {
    ...newTask,
    id: crypto.randomUUID(),
  };
 

  setTasks((previousTasks) => [
    ...previousTasks,
    task,
  ]);

  setShowForm(false);

}
 const handleEditTask=(task)=> {
  setEditingTask(task);
  setShowForm(true);
}
const handleUpdateTask=(updatedTask)=> {
  setTasks((previousTasks) =>
    previousTasks.map((task) =>
      task.id === editingTask.id
        ? { ...task, ...updatedTask }
        : task
    )
  );

  setEditingTask(null);
  setShowForm(false);
}
const handleDeleteTask=(taskId)=>{
    setTasks((previousTasks) =>
    previousTasks.filter((task) => task.id !== taskId)
  );
}
const filteredTasks = tasks.filter((task) =>
  task.title.toLowerCase().includes(search.toLowerCase()) ||
  task.description.toLowerCase().includes(search.toLowerCase())
);
    return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <h2>My Board</h2>
          <p>Organize your work and track your progress.</p>
        </div>
      </div>

      <div className="kanban-board">
        {columns.map((column) => {
       const columnTasks = filteredTasks.filter(
  (task) => task.status === column.id
);

          return (
            <section className="kanban-column" key={column.id}>
              <div className="column-heading">
                <div className="column-title">
                  <span className={`column-dot ${column.color}`} />
                  <h3>{column.title}</h3>
                  <span className="task-count">
                    {columnTasks.length}
                  </span>
                </div>

                <button className="column-menu">•••</button>
              </div>

<div className="column-tasks">
  {columnTasks.length > 0 ? (
    columnTasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
    ))
  ) : (
    <p className="empty-column">
      {search ? 'No matching tasks.' : 'No tasks here yet.'}
    </p>
  )}
</div>
            </section>
          );
        })}
      </div>

    <div className="add-task-container">
  <button
    className="primary-button"
    onClick={() => setShowForm(true)}
  >
    + Add Task
  </button>
</div>

{showForm && (
  <div className="modal-overlay">
    <TaskForm
       onCancel={() => { setShowForm(false);
        setEditingTask(null);}}
        onSubmit={editingTask ? handleUpdateTask : handleAddTask}
      initialTask={editingTask}


    />
  </div>
)}
    </div>
  );
}

export default TasksPage;
