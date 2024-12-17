'use client';

import { useEffect, useState } from 'react';
import { getTasks } from '@/services/api';
import TaskList from '@/components/taskList/taskList';
import TaskCreator from '@/components/taskCreator/taskCreator';
import { statuses } from '@/constants/statuses';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      if (data) {
        setTasks(data);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Tasks</h1>
        <div className="grid grid-cols-3 gap-6">
          {statuses.map(({ key, label }) => (
            <TaskList key={key} status={key} label={label} tasks={tasks} setTasks={setTasks} />
          ))}
        </div>
      </div>
      <TaskCreator tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
