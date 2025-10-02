import { useState } from "react";

export default function ToDoList() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input) {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
  const newTodos = [...todo];
  newTodos.splice(index, 1); 
  setTodo(newTodos);     
};


  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo App</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todo.map((task, index) => (
          <li key={index}>
            {task} <button style={{margin: "5px"}} onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
