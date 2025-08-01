import React, { useState } from 'react';

const AdditionForm: React.FC = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleAddition = () => {
    const sum = Number(number1) + Number(number2);
    setResult(sum);
  };

  return (
    <div style={{ backgroundColor: '#b3e0f2', padding: '20px', width: '300px', fontFamily: 'Arial' }}>
      <h2>Simple Addition Form</h2>

      <div>
        <label>Number 1:&nbsp;</label>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Number 2:&nbsp;</label>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>

      <button style={{ marginTop: '10px' }} onClick={handleAddition}>Add</button>

      <h3 style={{ marginTop: '15px' }}>Result</h3>
      {result !== null && <p>{result}</p>}
    </div>
  );
};

export default AdditionForm;
