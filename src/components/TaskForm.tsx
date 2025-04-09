import { useState } from "react";

interface Task {
  title: string;
  description: string;
}

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md space-y-4">
      <input
        type="text"
        placeholder="Назва задачі"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        className="w-full p-2 border rounded-lg"
      />
      <textarea
        placeholder="Опис задачі"
        value={description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        className="w-full p-2 border rounded-lg"
      />
      <button 
        type="submit" 
        className="w-full bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition"
      >
        Додати задачу
      </button>
    </form>
  );
};

export default TaskForm;