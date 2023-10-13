import React from 'react';
import styles from './HowItWorksPage.module.sass';
import HeaderHowItWorks from '../../components/HeaderHowItWorks';
import GenuineHowItWorks from '../../components/GenuineHowItWorks';
import FooterHowItWorks from '../../components/FooterHowItWorks'

const HowItWorks = () => {
  return (
    <>
      <HeaderHowItWorks />
      <GenuineHowItWorks/>
      {/* <FooterHowItWorks /> */}
    </>
  );
};

export default HowItWorks;
