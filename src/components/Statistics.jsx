import React from "react";
import { useLoaderData } from "react-router-dom";
import Chart from "./Chart";

const Statistics = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <h1 className='text-center font-bold text-3xl text-primary my-8'>
        A chart of total questions
      </h1>
      <div className='flex justify-center items-center pr-10 py-8 max-w-3xl mx-auto'>
        <Chart data={data}></Chart>
      </div>
    </div>
  );
};

export default Statistics;
