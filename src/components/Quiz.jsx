import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Quiz = () => {
  const params = useParams();
  const questions = useLoaderData();
  console.log(questions);
  const { id } = params;
  return (
    <div>
      <h1>{id}</h1>
      <p>{questions.data.name}</p>
    </div>
  );
};

export default Quiz;
