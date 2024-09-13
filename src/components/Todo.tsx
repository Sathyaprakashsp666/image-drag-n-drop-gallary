import React, { useState } from "react";
import TodoItem from "./TodoItem";

const mockTasks = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, Eggs, Bread",
    category: "shopping",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Pay bills",
    description: "Electricity, Water",
    category: "shopping",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Walk the dog",
    description: "Morning walk with Bruno",
    category: "exercise",
    isCompleted: false,
  },
];

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  isCompleted: boolean;
}

const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const markAsDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      description,
      category,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setCategory("");
  };

  const filteredTasks = searchQuery
    ? tasks.filter((task) =>
        task.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tasks;

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search by category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => setSearchQuery("")}>Cancel Search</button>
      </div>

      {/* Tasks List */}
      <div>
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            markAsDone={markAsDone}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
