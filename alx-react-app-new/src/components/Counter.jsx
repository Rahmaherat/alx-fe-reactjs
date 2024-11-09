import React, { useState } from 'react';

function Counter() {
  // Initialize state with the useState hook
  const [count, setCount] = useState(0);

  // Handlers for incrementing, decrementing, and resetting the count
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Counter Application</h2>
      <p>Current Count: {count}</p>
      
      {/* Buttons for incrementing, decrementing, and resetting */}
      <button onClick={increment} style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}>Reset</button>
    </div>
  );
}

export default Counter;
