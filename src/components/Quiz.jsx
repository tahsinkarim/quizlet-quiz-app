import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Question from "./Question";

const Quiz = () => {
  const params = useParams();
  const { data } = useLoaderData();
  const { name, questions } = data;
  const { id } = params;

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const showAnswer = (correctAnswer) => {
    toast(`Correct answer is: ${correctAnswer}`);
  };
  const notify = (opt, correctAnswer) => {
    if (opt === correctAnswer) {
      toast("Your answer was correct");
      setCorrect(correct + 1);
    } else {
      toast("Wrong Answer!! Try again");
      setWrong(wrong + 1);
    }
  };

  return (
    <div className='px-5'>
      <h1 className='mt-8 text-3xl font-bold text-blue-500 text-center'>
        Practice Quiz for {name}
      </h1>
      <div className='text-center border rounded-md px-3 py-3 w-96 sm:flex justify-between mx-auto my-4 shadow-md'>
        <p className='rounded-md px-4 py-3 bg-green-600 text-white font-semibold my-1'>
          Correct Answers: {correct}
        </p>
        <p className='rounded-md px-4 py-3 my-1 bg-red-500 text-white font-semibold'>
          Wrong Answers: {wrong}
        </p>
      </div>
      {questions.map((ques) => (
        <Question
          key={ques.id}
          ques={ques}
          notify={notify}
          showAnswer={showAnswer}
        ></Question>
      ))}
    </div>
  );
};

export default Quiz;
