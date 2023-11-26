import React from 'react';
import styles from './ButtonGroup.module.sass';
import ActiveButton from './ActiveButton';

const ButtonGroup = ({ buttons }) => {
  return (
    <>
      <div className={styles.wraperButtonGroup}>
        {buttons.map((text, i) => (
          <div key={i} name={text} className={styles.customButton}>
            <ActiveButton className={styles.activeBtn} />
            <br />
            {text}
          </div>
        ))}
      </div>
    </>
  );
};

export default ButtonGroup;
