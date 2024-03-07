import React from 'react';

const Dropdown = ({data, selectedValue, setSelectedValue}) => {
  // Function to handle option selection
  const handleSelect = (option) => {
    setSelectedValue(option);
  };

  return (
    <div>
      <label>
        Select your lucky number
        <select value={selectedValue} onChange={handleSelect}>
          {data.map((option) => (
            <option value={option.index}>{option.option}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
