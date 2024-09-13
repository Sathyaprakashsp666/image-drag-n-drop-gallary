import React from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  isCompleted: boolean;
}

interface TodoItemProps {
  task: Task;
  markAsDone: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  markAsDone,
  deleteTask,
}) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px 0",
        backgroundColor: task.isCompleted ? "lightgreen" : "white",
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>
        <strong>Category:</strong> {task.category}
      </p>
      <button onClick={() => markAsDone(task.id)}>
        {task.isCompleted ? "Undo" : "Done"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
