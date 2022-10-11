import React from "react";
import Option from "./Option";

const Question = ({ ques }) => {
  const { question, options, id, correctAnswer } = ques;
  const splitQuestion = question.replace(/(<([^>]+)>)/gi, "");
  return (
    <div className='px-5 py-5 my-16 border-2 border-blue-500 rounded-md mx-auto max-w-4xl shadow-lg'>
      <h4 className='text-xl font-bold text-blue-500 my-4'>{splitQuestion}</h4>
      {options.map((opt) => (
        <Option
          key={opt}
          opt={opt}
          id={id}
          correctAnswer={correctAnswer}
        ></Option>
      ))}
    </div>
  );
};

export default Question;
