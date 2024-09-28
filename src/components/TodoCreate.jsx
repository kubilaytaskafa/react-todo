import { useState } from "react";
import "../App.css";
const TodoCreate = ({ onCreateTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const createInput = () => {
    setNewTodo("");
  };
  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 999999),
      content: newTodo,
    };
    onCreateTodo(request);
    createInput();
  };
  return (
    <div className="todo-create">
      <input
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Todo Giriniz"
        value={newTodo}
      />
      <button onClick={createTodo} className="todo-create-button">
        ToDo Oluştur.
      </button>
    </div>
  );
};

export default TodoCreate;
