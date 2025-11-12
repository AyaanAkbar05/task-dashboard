import { useState, useEffect } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import type { Task, TaskStatus } from "../../types";
import { filterTasks, sortTasksByDate } from "../../utils/taskUtils";

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved
    ? JSON.parse(saved).map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt),
        dueDate: new Date(task.dueDate),
      }))
    : [];
  });
  const [filterStatus, setFilterStatus] = useState<TaskStatus | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPriority, setFilterPriority] = useState<"all" | "low" | "medium" | "high">("all");
  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task: Task) => setTasks(prev => sortTasksByDate([task, ...prev]));
  const handleUpdateTask = (updatedTask: Task) => setTasks(prev => sortTasksByDate(prev.map(t => (t.id === updatedTask.id ? updatedTask : t))));
  const handleDeleteTask = (id: string) => setTasks(prev => prev.filter(t => t.id !== id));

  const filteredTasks = filterTasks(tasks, filterStatus, filterPriority, searchQuery);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskFilter
  filterStatus={filterStatus}
  setFilterStatus={setFilterStatus}
  filterPriority={filterPriority}
  setFilterPriority={setFilterPriority}
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
/>
      <TaskList tasks={filteredTasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
