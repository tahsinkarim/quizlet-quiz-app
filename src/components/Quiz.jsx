import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Question from "./Question";

const Quiz = () => {
  const params = useParams();
  const { data } = useLoaderData();
  const { name, questions } = data;
  const { id } = params;

  return (
    <div>
      <h1 className='mt-8 text-3xl font-bold text-blue-500 text-center'>
        Quiz for {name}
      </h1>
      <h3>
        {questions.map((ques) => (
          <Question key={ques.id} ques={ques}></Question>
        ))}
      </h3>
    </div>
  );
};

export default Quiz;
