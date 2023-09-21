import React from 'react';
import styles from './ButtonGroup.module.sass';
import Button from './Button';

const ButtonGroup = ({ buttons}) => {
  return (
    <div className={styles.testButtonGroup}>
      {buttons?.map((text, i) => (
        <button key={i} name={text} className={styles.customButton}>
          <Button className={styles.activeBtn} />
          <br/>
          {text}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
