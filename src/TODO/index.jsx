import { useState } from "react";
import "./styles.css";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
    };
    setTodo([...todo, newTask]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        placeholder="Enter a Task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todo.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}> Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
