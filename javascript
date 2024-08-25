import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState('');

  const options = [
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'numbers', label: 'Numbers' },
    { value: 'highestLowercase', label: 'Highest Lowercase Alphabet' }
  ];

  const handleJsonInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      setError('');
      const res = await axios.post('http://localhost:5000/api', parsedInput);
      setResponse(res.data);
    } catch (err) {
      setError('Invalid JSON input');
    }
  };

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  const renderResponse = () => {
    if (!response || selectedOptions.length === 0) return null;

    return selectedOptions.map(option => (
      <div key={option.value}>
        <h3>{option.label}</h3>
        <pre>{JSON.stringify(response[option.value], null, 2)}</pre>
      </div>
    ));
  };

  return (
    <div>
      <h1>Enter JSON</h1>
      <textarea
        value={jsonInput}
        onChange={handleJsonInputChange}
        rows="10"
        cols="50"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <h2>Select Data to Display</h2>
          <Select
            isMulti
            options={options}
            onChange={handleSelectChange}
          />
          {renderResponse()}
        </div>
      )}
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
// existing imports...

function App() {
  useEffect(() => {
    document.title = 'YourRollNumber'; // Replace 'YourRollNumber' with your actual roll number
  }, []);

  // existing code...
}
