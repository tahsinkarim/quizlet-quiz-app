import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCards from "./QuizCards";

const Home = () => {
  const { data } = useLoaderData();
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto '>
      {data.map((quiz) => (
        <QuizCards key={quiz.id} quiz={quiz}></QuizCards>
      ))}
    </div>
  );
};

export default Home;
