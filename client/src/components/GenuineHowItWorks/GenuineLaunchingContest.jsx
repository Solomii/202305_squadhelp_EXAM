import React from 'react';
import styles from './FaqBox.module.sass';
import FaqCreativity from './GenuineFaqs';

const GenuineFaqBox = () => {
  return (
    <div className={styles.faqBoxs}>
      <div className={styles.faqBoxLeft}>
        <nav className={styles.navigation}>
          <ul>
            <li>Launching A Contest</li>
            <li>Buying From Marketplace</li>
            <li>Managed Contest</li>
            <li>For Creatives</li>
          </ul>
        </nav>
      </div>
      <div className={styles.faqBoxRight}>
        <FaqCreativity />
      </div>
    </div>
  );
};

export default GenuineFaqBox;
