import type { TaskItemProps } from "../../types";

export default function TaskItem({ task, onUpdateTask, onDeleteTask }: TaskItemProps) {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdateTask({ ...task, status: e.target.value as any });
  };

  return (
    <div className="border p-2 rounded flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
        <small>Priority: {task.priority}</small>
        <small> | Due: {task.dueDate.toLocaleDateString()} </small>
      </div>
      <div className="flex gap-2">
        <select value={task.status} onChange={handleStatusChange} className="border p-1 rounded">
          <option value="pending">Pending</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={() => onDeleteTask(task.id)} className="text-red-500">Delete</button>
      </div>
    </div>
  );
}
