import React from 'react';
import styles from './GenuineHowItWorks.module.sass';
import GenuineWaysToUse from './GenuineWaysToUse';
import GenuineNamingContestsWork from './GenuineNaminingContestsWork';
import GenuineStartContest from './GenuineStartContest';
import GenuineFaqsContent from './GenuineFaqsContent';
import SvgMobileImage from '../icons/SvgMobileImage';

const GenuineHowItWorks = () => {
  return (
    <div className={styles.genuineBox}>
      <div className={styles.howDoesWork}>
        <div>
          <div>
            <span>World's #1 Naming Platform</span>
          </div>
          <div>
            <h1>How Does Squadhelp Work?</h1>
            <p>
              Squadhelp helps you come up with a great name for your business by
              combining the power of crowdsourcing with sophisticated technology
              and Agency-level validation services.
            </p>
          </div>
          <div>
            <a className={styles.playButton} href='https://vimeo.com/826948811'>
              <i class='fas fa-play '></i>
              Play Video
            </a>
          </div>
        </div>

        <div className={styles.wrapperMobileImage}>
          <SvgMobileImage />
        </div>
      </div>
      <div className={styles.genuineWaysBox}>
        <div>
          <span>Our Services</span>
          <h2>3 Ways To Use Squadhelp</h2>
          <p>
            Squadhelp offers 3 ways to get you a perfect name for your business.
          </p>
          <GenuineWaysToUse />
        </div>
      </div>
      <GenuineNamingContestsWork />
      <GenuineFaqsContent />
      <GenuineStartContest />
    </div>
  );
};

export default GenuineHowItWorks;
