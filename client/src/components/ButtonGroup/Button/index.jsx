import React, { useState } from 'react';

const Button = () => {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button type='button' onClick={handleClick}>
      {active ? 'yes' : 'no'}
    </button>
  );
};

export default Button;
