import React, { useState } from 'react';

function SumCalculator() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const totalSum = numbers.reduce((acc, currentValue) => {
    return acc + currentValue; 
  }, 0);

  return (
    <div>
      <h1>Sum of Numbers</h1>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Total Sum: {totalSum}</p>
    </div>
  );
}

export default SumCalculator;
