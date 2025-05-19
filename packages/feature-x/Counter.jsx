import React, { useState } from 'react';
// import { Container, Heading, Text, Button } from '@group-scope/ui-components';
// import { formatNumber } from '@group-scope/utils';
import { useGlobalState } from '../../system/store'; // Import the global state hook

function Counter() {
  const [count, setCount] = useState(0);
  const { sharedMessage, setSharedMessage } = useGlobalState(); // Access global state and the setter

  const increment = () => {
    setCount(count + 1);
    setSharedMessage(`Counter incremented to ${count + 1}`); // Example of updating global state
  };

  const decrement = () => {
    setCount(count - 1);
    setSharedMessage(`Counter decremented to ${count - 1}`); // Example of updating global state
  };

  const reset = () => {
    setCount(0);
    setSharedMessage('Counter reset'); // Example of updating global state
  };

  return (
    <div> {/* Using basic HTML div instead of Container */}
      <h2>Simple Counter</h2> {/* Using basic HTML h2 instead of Heading */}
      <p>Count: {count}</p> {/* Using basic HTML p instead of Text, also removed formatNumber */}
      <p>Global Message: {sharedMessage}</p> {/* Using basic HTML p instead of Text */}
      <button onClick={increment}>Increment</button> {/* Using basic HTML button instead of Button */}
      <button onClick={decrement}>Decrement</button> {/* Using basic HTML button instead of Button */}
      <button onClick={reset}>Reset</button> {/* Using basic HTML button instead of Button */}
    </div>
  );
}

export default Counter; 