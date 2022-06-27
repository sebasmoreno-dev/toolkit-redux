import React, { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi";


export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  
  // console.log(todo);

  /* A React Hook that is used to manage state in a functional component. */
  const [todoId, setTodoId] = useState(1);
  /* Destructuring the data from the useGetTodoByIdQuery hook. */
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  /**
   * If the todoId is greater than 1, then subtract 1 from the todoId, otherwise, do nothing.
   */
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
