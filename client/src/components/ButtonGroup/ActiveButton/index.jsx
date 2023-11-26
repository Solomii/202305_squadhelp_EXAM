import React, { useState } from 'react';

const ActiveButton = ({ className }) => {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <button type='button' onClick={handleClick} className={className}>
        {active ? 'Yes' : 'No'}
      </button>
    </>
  );
};

export default ActiveButton;
