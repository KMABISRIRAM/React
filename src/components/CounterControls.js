import React from "react";
import { useCounter } from "./CounterContext";

const CounterControls = () => {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterControls;
