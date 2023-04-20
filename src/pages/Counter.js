import React from 'react';

const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
    </div>
  );
};

export default Counter;
