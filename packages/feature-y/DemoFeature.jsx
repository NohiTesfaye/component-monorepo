import React, { useState } from 'react';
// Import UI components
import Button from '../ui-components/Button.jsx';
import Card from '../ui-components/Card.jsx';
import Input from '../ui-components/Input.jsx';
// Import utilities
import { formatDate, capitalize } from '../utils/index.jsx';

const DemoFeature = () => {
  const [count, setCount] = useState(0);
  const [date] = useState(new Date());
  const [text, setText] = useState('');

  const reverseText = (str) => str.split('').reverse().join('');

  return (
    <Card>
      <h2>{capitalize('demo feature y')}</h2>
      <p>Today's date: {formatDate(date)}</p>
      <p>{capitalize('counter')}: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)} style={{ marginLeft: 8 }}>Decrement</Button>
      <div style={{ marginTop: 16 }}>
        <Input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter text to reverse"
        />
        <p>{capitalize('reversed text')}: {reverseText(text)}</p>
      </div>
    </Card>
  );
};

export default DemoFeature; 