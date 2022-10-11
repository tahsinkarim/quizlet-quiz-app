import React from "react";
import { Link } from "react-router-dom";

const QuizCards = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className='card w-60 bg-gray-200 shadow-xl m-8 mx-auto'>
      <figure className='px-3 pt-3'>
        <img src={logo} alt='Shoes' className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center p-4'>
        <h2 className='card-title'>{name}</h2>
        <p>Total Questions: {total}</p>
        <div className='card-actions'>
          <Link to={`/quiz/${id}`} className='btn btn-primary px-6'>
            <span className='mr-2'>Take Quiz</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizCards;
