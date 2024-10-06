"use client";
import { useState, useEffect } from "react";
import { initialTodos, createTodo } from "./todo";

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  const activeTodos = todos.filter((todo) => !todo.completed);

  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <div className="text-black">
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo
        onAdd={(newTodo: { id: number; text: string; completed: boolean }) =>
          setTodos([...todos, newTodo])
        }
      />
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>{activeTodos.length} todos left</footer>{" "}
    </div>
  );
}

function NewTodo({
  onAdd,
}: {
  onAdd: (newTodo: { id: number; text: string; completed: boolean }) => void;
}) {
  const [text, setText] = useState("");

  function handleAddClick() {
    setText("");
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}