import React from "react";
import Option from "./Option";

const Question = ({ ques }) => {
  const { question, options, id } = ques;
  console.log(ques, question);
  const splitQuestion = question.replace(/(<([^>]+)>)/gi, "");
  return (
    <div className='px-4'>
      <h4 className='text-xl font-bold text-blue-500'>{splitQuestion}</h4>
      {options.map((opt) => (
        <Option key={opt} opt={opt}></Option>
      ))}
    </div>
  );
};

export default Question;
