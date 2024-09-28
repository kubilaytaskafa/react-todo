import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "../App.css";
import { useState } from "react";
const Todo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  const [ediTable, setAdiTable] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.content);
  const removeTodo = () => {
    onRemoveTodo(todo.id);
  };

  const updateTodo = () => {
    const request = {
      id: todo.id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setAdiTable(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgray",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <div>
        {ediTable ? (
          <input
            style={{ width: "380px" }}
            className="todo-input"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        ) : (
          todo.content
        )}
      </div>
      <div>
        <IoIosRemoveCircle onClick={removeTodo} className="todo-icons" />
        {ediTable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setAdiTable(true)} />
        )}
      </div>
    </div>
  );
};
export default Todo;
