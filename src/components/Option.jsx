import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ opt, id, notify, correctAnswer }) => {
  return (
    <div className='my-3 bg-blue-100 px-6 py-4 rounded-lg font-semibold'>
      <input
        onClick={() => notify(opt, correctAnswer)}
        className='mr-2'
        type='radio'
        id={opt}
        name={id}
        value='HTML'
      />
      <label htmlFor={opt}>{opt}</label>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Option;
