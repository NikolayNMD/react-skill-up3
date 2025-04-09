import { useState } from "react";
import TaskForm from "./components/TaskForm";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Omit<Task, "id" | "completed">): void => {
    setTasks([...tasks, { id: Date.now(), ...task, completed: false }]);
  };

  const toggleTask = (id: number): void => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 space-y-4">
      <TaskForm onAddTask={addTask} />

      <ul className="space-y-2">
        {tasks.map(({ id, title, description, completed }) => (
          <li 
            key={id} 
            className="flex flex-col p-4 border rounded-lg shadow-sm"
          >
            <div className={`text-lg font-semibold ${completed ? "line-through text-gray-500" : ""}`}>
              {title}
            </div>
            <div className="text-sm text-gray-600">{description}</div>
            <button 
              onClick={() => toggleTask(id)} 
              className="mt-2 bg-green-500 p-2 rounded-lg hover:bg-green-600 transition"
            >
              {completed ? "Незавершена" : "Завершена"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
