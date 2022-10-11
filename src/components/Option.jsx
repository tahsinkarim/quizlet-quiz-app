import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ opt, id, correctAnswer }) => {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const notify = () => {
    if (opt === correctAnswer) {
      toast("Your answer was correct");
      setCorrect(correct + 1);
    } else {
      toast("Wrong Answer!! Try again");
      setWrong(wrong + 1);
    }
  };
  return (
    <div className='my-3 bg-blue-100 px-6 py-4 rounded-lg font-semibold'>
      <input
        onClick={notify}
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
