import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <h1>
        {data.map((quiz) => (
          <p key={quiz.id}>{quiz.name}</p>
        ))}
      </h1>
    </div>
  );
};

export default Home;
