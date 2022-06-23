import React, { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi";


export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  
  // console.log(todo);

  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodoId = () => {
    setTodoId(todoId + 1);
  }

  const prevTodoId = () => {
    if(todoId === 1) return;
    setTodoId(todoId - 1);
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading... {isLoading ? "Ture" : "False"} </h4>

      <pre>{ JSON.stringify( todo )}</pre>

      

      <button
        onClick={prevTodoId}
      >
        Previus Todo
      </button>

      <button
        onClick={nextTodoId}
      >
        Next Todo
      </button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done" : "Pending"}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}

      
    </>
  );
};
