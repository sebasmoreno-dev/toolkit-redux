import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",

  /* Setting the base url for all the queries in this api. */
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  /* Creating the endpoints for the api. */
  endpoints: (builder) => ({

    getTodos: builder.query({
      query: () => "/todos",
    }),

    getTodoById: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

/* Exporting the hooks that we can use to make the queries. */
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;

//TODO:redux-rtq snippet hacer
