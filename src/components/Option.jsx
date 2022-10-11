import React from "react";

const Option = ({ opt }) => {
  return (
    <div>
      <input type='radio' id={opt} name='fav_language' value='HTML' />
      <label htmlFor={opt}>{opt}</label>
    </div>
  );
};

export default Option;
