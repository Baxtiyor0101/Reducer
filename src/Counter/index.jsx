import React, { useReducer, useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [option, setOption] = useState(1);
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
  const onSelect = (e) => {
    console.log(typeof +e.target.value);
    setOption(+e.target.value);
  };
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <hr />
      <h1>Counter with reducer {counter}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <br />
      <select onChange={onSelect} defaultValue={1} name="" id="">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button onClick={() => dispatch({ type: "amaunt", payload: option })}>
        {option}
      </button>
    </div>
  );
}

export default Counter;
