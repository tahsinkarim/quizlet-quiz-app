import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Statistics from "./components/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          errorElement: <ErrorPage></ErrorPage>,
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
          errorElement: <ErrorPage></ErrorPage>,
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
          errorElement: <ErrorPage></ErrorPage>,
        },
        {
          path: "quiz/:id",
          element: <Quiz></Quiz>,
          errorElement: <ErrorPage></ErrorPage>,
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
