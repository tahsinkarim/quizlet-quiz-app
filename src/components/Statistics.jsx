import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <h1 className='text-center font-bold text-3xl text-primary my-8'>
        A chart of total questions
      </h1>
      <div className='flex justify-center items-center pr-10 py-8'>
        <ResponsiveContainer width='80%' height='50%'>
          <LineChart width={600} height={300} data={data}>
            <Line type='monotone' dataKey='total' stroke='#8884d8' />
            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
