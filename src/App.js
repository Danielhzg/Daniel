import React, { useState } from 'react';
import './App.css' ;

function FormExample() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted with value: ' + inputValue);
  };

  const handleReset = () => {
    setInputValue('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input className="input-field" type="text" value={inputValue} onChange={handleChange} />
        <button className="btn" type="submit">Submit</button>
        <button className="btn btn-reset" type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default FormExample;
