import React from "react";

const Blog = () => {
  const questions = [
    {
      question: "What is the purpose of React Router?",
      answer:
        "React router is a tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform. ",
    },
    {
      question: "How does Context API works ?",
      answer:
        "In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.",
    },
    {
      question: "What is useRef hook in react ?",
      answer:
        "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.",
    },
  ];

  return (
    <div className='mt-20 px-4'>
      {questions.map((question, i) => (
        <div
          className='max-w-xl mx-auto my-4 py-4 px-4 bg-slate-100 rounded-md shadow-md'
          key={i}
        >
          <h3 className='text-xl font-bold text-blue-500'>
            {question.question}
          </h3>
          <p className='text-gray-500 mt-4 pb-2'>{question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
