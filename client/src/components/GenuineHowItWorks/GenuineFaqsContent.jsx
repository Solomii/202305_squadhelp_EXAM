import React from 'react';
import styles from './FaqBox.module.sass';
import FaqsBoxs from './GenuineFaqsBoxs';

const GenuineFaqsContent = () => {
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
        <FaqsBoxs />
      </div>
    </div>
  );
};

export default GenuineFaqsContent;
