import React from "react";
import { useLoaderData } from "react-router-dom";
import img from "../components/images/hero.jpg";
import QuizCards from "./QuizCards";

const Home = () => {
  const { data } = useLoaderData();
  return (
    <div className='px-4'>
      <div className='grid md:grid-cols-2 max-w-6xl mx-auto justify-center items-center'>
        <div className='mx-auto md:order-last'>
          <img src={img} alt='' />
        </div>
        <div className='mx-auto text-center md:text-left md:pl:10'>
          <h2 className='text-4xl font-bold text-primary'>
            Best Online Quizzes
          </h2>
          <p className='mt-4 max-w-xs text-gray-500 font-semibold'>
            Keeping yourself entertained and educated is just a quiz away.our
            online quizzes are an excellent source of knowledge on front-end
            technologies.
          </p>
        </div>
      </div>
      <div></div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto '>
        {data.map((quiz) => (
          <QuizCards key={quiz.id} quiz={quiz}></QuizCards>
        ))}
      </div>
    </div>
  );
};

export default Home;
