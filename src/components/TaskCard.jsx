
function TaskCard({ task, onEdit, onDelete  })  {
  const formattedDate = task.dueDate
  ? new Date(`${task.dueDate}T00:00:00`).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  : 'No due date';
  return (
    <article className="task-card">
      <div className="task-card-top">
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>

        <button className="task-menu">•••</button>
      </div>

      <h4>{task.title}</h4>

      <p className="task-description">
        {task.description}
      </p>

      <div className="task-card-footer">
        <span className="task-date">
          <span>◷</span> {formattedDate}
        </span>

        <div className="task-actions">
          <button title="Edit task" onClick={()=>{onEdit(task)}}>✎</button>
       <button
  title="Delete task"
  onClick={() => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${task.title}"?`
    );

    if (confirmed) {
      onDelete(task.id);
    }
  }}
>
  ×
</button>
 </div>
      </div>
    </article>
  );
}

export default TaskCard;
