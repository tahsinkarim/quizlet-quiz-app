import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ opt, id, notify, correctAnswer }) => {
  return (
    <div className='my-3 bg-blue-100 hover:bg-blue-300 px-6 rounded-lg font-semibold flex'>
      <input
        onClick={() => notify(opt, correctAnswer)}
        className='mr-2'
        type='radio'
        id={opt}
        name={id}
        value='HTML'
      />
      <label className='py-4 w-full' htmlFor={opt}>
        {opt}
      </label>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Option;
