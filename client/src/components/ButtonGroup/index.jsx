import React, { useState } from 'react';
import styles from './ButtonGroup.module.sass';
import Button from './Button';

const ButtonGroup = ({ buttons }) => {
  return (
    <div>
      {buttons?.map((text, i) => (
        <button key={i} name={text} className={styles.customButton}>
          <Button />
          <br />
          <br />
          {text}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
