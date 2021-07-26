import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [val, setVal] = useState('');

  const inputEvent = (event) => {
    const data = event.target.value;

    setVal(data);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter value"
        onChange={inputEvent}
        value={val}
      />
      <br></br>
      <div>
       { val ==='' ? null : <Sresult name={val} />} 
      </div>
    </>
  );
};

export default Search;
