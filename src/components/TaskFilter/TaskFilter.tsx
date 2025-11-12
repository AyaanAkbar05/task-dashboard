import type { TaskFilterProps } from "../../types";

export default function TaskFilter({
  filterStatus,
  setFilterStatus,
  filterPriority,
  setFilterPriority,
  searchQuery,
  setSearchQuery,
}: TaskFilterProps) {
  return (
    <div className="flex gap-2 p-4 flex-wrap">
      <select
        value={filterStatus}
        onChange={e => setFilterStatus(e.target.value as any)}
        className="border p-2 rounded"
      >
        <option value="all">All Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In-Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select
        value={filterPriority}
        onChange={e => setFilterPriority(e.target.value as any)}
        className="border p-2 rounded"
      >
        <option value="all">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="border p-2 rounded flex-1"
      />
    </div>
  );
}
