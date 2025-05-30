import React, { useState } from 'react';
// Import UI components
import Button from '../ui-components/Button.jsx';
import Input from '../ui-components/Input.jsx';
import Card from '../ui-components/Card.jsx';
import Modal from '../ui-components/Modal.jsx';
import Spinner from '../ui-components/Spinner.jsx';
// Import utilities — note the updated extension to .js
import { formatDate, capitalize, fetchJson } from '../utils/index.jsx';

const DemoFeature = () => {
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date] = useState(new Date());
  const [apiData, setApiData] = useState(null);

  const handleApiCall = async () => {
    setLoading(true);
    try {
      // Example API call (replace with a real API endpoint)
      const data = await fetchJson('https://jsonplaceholder.typicode.com/todos/1');
      setApiData(data);
    } catch (e) {
      setApiData({ error: e.message });
    }
    setLoading(false);
  };

  return (
    <Card>
      <h2>{capitalize('demo feature')}</h2>
      <p>Today's date: {formatDate(date)}</p>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      <Button onClick={handleApiCall} style={{ marginLeft: 8 }}>
        Fetch API Data
      </Button>
      {loading && <Spinner />}
      {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h3>Hello, {capitalize(name) || 'Guest'}!</h3>
        <Button onClick={() => setShowModal(false)}>Close</Button>
      </Modal>
    </Card>
  );
};

export default DemoFeature;
