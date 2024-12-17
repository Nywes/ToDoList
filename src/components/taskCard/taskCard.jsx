import React from 'react';

const TaskCard = ({ task, handlePatchTask, handleDeleteTask }) => {
  return (
    <li
      key={task.id}
      className="flex justify-between items-center bg-gray-50 p-4 rounded-md flex-wrap"
    >
      <div className="text-lg mb-4 text-gray-700 break-words w-full">
        <strong>{task.title}</strong>
      </div>
      {task.description && (
        <div className="text-md mb-4 text-gray-700 break-words w-full">{task.description}</div>
      )}

      <div className="w-full sm:w-auto mt-2 sm:mt-0 flex justify-end">
        <select
          value={task.status}
          onChange={(e) => handlePatchTask(task.id, e.target.value)}
          className="text-sm p-2 border border-gray-300 rounded-md text-gray-700"
        >
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <button
        onClick={() => handleDeleteTask(task.id)}
        className="text-sm bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskCard;
