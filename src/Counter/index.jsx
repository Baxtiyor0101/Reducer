import React, { useReducer, useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const reducer = (state, action) => {
    console.log(state, action.payload);
    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "amaunt":
        return state + action.payload;
      default:
        return state;
    }
  };
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <hr />
      <h1>Counter with reducer {counter}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "amaunt", payload: 5 })}>
        5
      </button>
    </div>
  );
}

export default Counter;
