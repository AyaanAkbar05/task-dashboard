export type TaskStatus = "pending" | "in-progress" | "completed";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  createdAt: Date;
  dueDate: Date;
}

export interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

export interface TaskItemProps {
  task: Task;
  onUpdateTask: (updatedTask: Task) => void;
  onDeleteTask: (id: string) => void;
}

export interface TaskFilterProps {
  filterStatus: TaskStatus | "all";
  setFilterStatus: (status: TaskStatus | "all") => void;
  filterPriority: "all" | "low" | "medium" | "high";
  setFilterPriority: (priority: "all" | "low" | "medium" | "high") => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
