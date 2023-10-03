import React from 'react';
import styles from './GenuineHowItWorks.module.sass';
import SvgComponentCup from '../icons/SvgComponentCup';
import SvgPersonWithLaptop from '../icons/SvgPersonWithLaptop';
import CONSTANTS from '../../constants';

const GenuineNaminingContestsWork = () => {
  return (
    <div className={styles.namingContestsWork}>
      <SvgComponentCup />
      <h2>How Do Naming Contests Work?</h2>
      <div className={styles.wrapper}>
        <div className={styles.listNamingBox}>
          <ul>
            {CONSTANTS.LIST_NAMING_CONTESTS_WORK.map((item, number) => (
              <li key={item}>
                <h4>{number + CONSTANTS.LIST_NUMBER}.</h4>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SvgPersonWithLaptop />
        </div>
      </div>
    </div>
  );
};

export default GenuineNaminingContestsWork;
