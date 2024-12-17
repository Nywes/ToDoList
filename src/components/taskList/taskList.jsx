import React from 'react';
import TaskCard from '@/components/taskCard/taskCard';
import { deleteTask, updateTask } from '@/services/api';

const TaskList = ({ status, label, tasks, setTasks }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  const handlePatchTask = async (taskId, newStatus) => {
    try {
      await updateTask(taskId, { status: newStatus });
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task))
      );
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{label}</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <ul className="space-y-4">
          {filteredTasks.length === 0 ? (
            <li className="text-center text-gray-500">No tasks available</li>
          ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                handlePatchTask={handlePatchTask}
                handleDeleteTask={handleDeleteTask}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
