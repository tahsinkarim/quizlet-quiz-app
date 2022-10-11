import React from "react";
import { Link } from "react-router-dom";
import img from "../components/images/error.png";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold text-center mt-4'>
          Oops! Page not found
        </h1>
        <img className='w-2/3 mx-auto' src={img} alt='' />
        <h1 className='text-2xl font-bold text-center mt-4'>
          We can't find the page you are looking for
        </h1>
        <div className='flex justify-center items-center'>
          <Link
            className='bg-primary text-white py-2 px-5 rounded-lg my-8'
            to='/'
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
