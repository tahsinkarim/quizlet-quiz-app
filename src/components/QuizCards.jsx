import React from "react";

const QuizCards = ({ quiz }) => {
  const { name, logo, total } = quiz;
  return (
    <div className='card w-60 bg-gray-200 shadow-xl m-8 mx-auto'>
      <figure className='px-3 pt-3'>
        <img src={logo} alt='Shoes' className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center p-4'>
        <h2 className='card-title'>{name}</h2>
        <p>Total Questions: {total}</p>
        <div className='card-actions'>
          <button className='btn btn-primary'>Take Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default QuizCards;
