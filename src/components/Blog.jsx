import React from "react";

const Blog = () => {
  const questions = [
    {
      question: "What is the purpose of React Router?",
      answer:
        "React router is a tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform. ",
    },
    { question: "How does Context API works ?", answer: "" },
    { question: "What is useRef hook in react ?", answer: "" },
  ];
  return (
    <div className='mt-20'>
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
