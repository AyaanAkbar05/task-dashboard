import type { Task } from "../types";

export const filterTasks = (
  tasks: Task[],
  status: string,
  priority: string,
  query: string
) => {
  return tasks.filter(task => {
    const matchesStatus = status === "all" || task.status === status;
    const matchesPriority = priority === "all" || task.priority === priority;
    const matchesQuery = task.title.toLowerCase().includes(query.toLowerCase());
    return matchesStatus && matchesPriority && matchesQuery;
  });
};

export const sortTasksByDate = (tasks: Task[]) => {
  return [...tasks].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};


