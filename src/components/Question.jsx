import React from "react";
import Option from "./Option";

const Question = ({ ques, notify, showAnswer }) => {
  const { question, options, id, correctAnswer } = ques;
  const splitQuestion = question.replace(/(<([^>]+)>)/gi, "");
  return (
    <div className='px-5 py-5 my-16 border-2 border-blue-500 rounded-md mx-auto max-w-4xl shadow-lg relative'>
      <h4 className='text-xl font-bold text-blue-500 my-4 pr-10'>
        {splitQuestion}
      </h4>
      {options.map((opt) => (
        <Option
          key={opt}
          opt={opt}
          id={id}
          correctAnswer={correctAnswer}
          notify={notify}
        ></Option>
      ))}
      <div
        onClick={() => showAnswer(correctAnswer)}
        className='absolute top-10 right-6 text-primary hover:text-primary-focus cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'
        >
          <path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
          <path
            fillRule='evenodd'
            d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
};

export default Question;
