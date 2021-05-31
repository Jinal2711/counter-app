import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [incrementFlag, setIncrementFlag] = useState(false);
  const [decrementFlag, setDecrementFlag] = useState(false);

  const handleIncrement = () => {
    setIncrementFlag(true);
    setDecrementFlag(false);
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setDecrementFlag(true);
    setIncrementFlag(false);
    setCounter((prev) => prev - 1);
  };

  const handleChange = (e) => {
    let texboxValue = parseInt(e.target.value);
    if (texboxValue <= 1000) {
      setCounter(texboxValue);
    } else {
      alert("You can only enter value till 1000");
    }
  };

  return (
    <div className="counter">
      <button
        className={`btn ${decrementFlag ? "subActive" : "subtract"} ${
          counter === 1 ? "disabled" : "subtract"
        }`}
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        type="text"
        value={counter || 1}
        className="inputNumber"
        onChange={handleChange}
      />
      <button
        className={`btn ${incrementFlag ? "addActive" : "add"} ${
          counter === 1000 ? "disabled" : "add"
        }`}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
