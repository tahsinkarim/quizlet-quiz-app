import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";
import Quiz from "./components/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        {
          path: "/statistics",
          element: <p>Statistics</p>,
        },
        {
          path: "/blog",
          element: <p>Blog</p>,
        },
        {
          path: "quiz/:id",
          element: <Quiz></Quiz>,
          loader: ({ params }) => {
            const url = `https://openapi.programming-hero.com/api/quiz/${params.id}`;
            return fetch(url);
          },
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
