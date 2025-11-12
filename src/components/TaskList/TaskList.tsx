import TaskItem from "./TaskItem";
import type { Task } from "../../types";

interface TaskListProps {
  tasks: Task[];
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
}

export default function TaskList({ tasks, onUpdateTask, onDeleteTask }: TaskListProps) {
  if (!tasks.length) return <p className="text-center p-4">No tasks available</p>;

  return (
    <div className="flex flex-col gap-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}
