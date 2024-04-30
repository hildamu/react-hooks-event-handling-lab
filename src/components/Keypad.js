import React from 'react';

function Keypad() {
  const eventHandleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
    <input
      type="password"
      onChange={eventHandleChange}
    />
    </div>
  );
}

export default Keypad;
