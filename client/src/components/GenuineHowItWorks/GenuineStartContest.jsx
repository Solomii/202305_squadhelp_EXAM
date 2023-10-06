import React from 'react';
import styles from './GenuineHowItWorks.module.sass';
import SvgStarts from '../icons/SvgStarts';
import SvgSharingFiles from '../icons/SvgSharingFiles';
import GenuineQeustionsBox from './GenuineQeustionsBox';


const GenuineStartContest = () => {
  return (
    <div className={styles.startContest}>
      <div className={styles.boxBlue}>
        <h3>Ready to get started?</h3>
        <p>
          Fill out your contest brief and begin receiving custom name
          suggestions within minutes.
        </p>
        <div>
          <a href='/start-contest'>Start A Contest</a>
        </div>
      </div>
      <div>
        <SvgStarts />
        <p>
          <span>4.9 out of 5 stars</span> from 25,000+ customers.
        </p>
      </div>
      <div>
        <p>
          Our branding community stands <span>200,000+</span> strong.
        </p>
      </div>
      <div>
        <SvgSharingFiles />
        <p>
          <span>140+ Industries</span> supported across more than &nbsp;
          <span>85 countries</span>
          <br /> – and counting.
        </p>
      </div>
      <div className={styles.questions}>
        <GenuineQeustionsBox />
      </div>
    </div>
  );
};

export default GenuineStartContest;
