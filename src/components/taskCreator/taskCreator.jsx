import React from 'react';
import { useState } from 'react';
import { createTask } from '@/services/api';
import { statuses } from '@/constants/statuses';

const TaskCreator = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'todo' });

  const handleCreateTask = async () => {
    const createdTask = await createTask(newTask);
    setTasks([...tasks, createdTask]);
    setNewTask({ title: '', description: '', status: 'todo' });
  };

  return (
    <div className="w-1/4 bg-white p-6 shadow-lg sticky top-0 h-screen">
      <h2 className="text-2xl text-gray-800 mb-4">Create Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
      />
      <textarea
        placeholder="Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        className="w-full mb-2 p-2 border border-gray-300 rounded-md resize-y min-h-20 max-h-60"
      />
      <div className="mb-4">
        <label htmlFor="status" className="block text-sm text-gray-600 mb-2">
          Status
        </label>
        <select
          id="status"
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          {statuses.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleCreateTask}
        className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600"
      >
        Create Task
      </button>
    </div>
  );
};

export default TaskCreator;
