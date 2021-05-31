import React, { useEffect, useState } from "react";

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

  return (
    <div className="counter">
      <button
        className={`btn ${decrementFlag ? "subActive" : "subtract"} ${
          counter == 1 ? "disabled" : "subtract"
        }`}
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        type="text"
        value={counter || 1}
        className="inputNumber"
        onChange={(e) => setCounter(parseInt(e.target.value))}
      />
      <button
        className={`btn ${incrementFlag ? "addActive" : "add"} ${
          counter == 1000 ? "disabled" : "add"
        }`}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
