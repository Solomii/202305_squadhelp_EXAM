import React, { useState } from 'react';
import styles from './FaqBox.module.sass';
import {
  faqLaunchingData,
  faqBuingData,
  faqManagedData,
  faqForCreativesData,
} from './FAQData';

const FaqsBoxs = () => {
  const [click, setClick] = useState(false);

  const handleActiveClick = index => {
    setClick(click === index ? null : index);
  };

  return (
    <>
      <h3>Launching A Contest</h3>
      <div className={styles.answersQuestions}>
        {faqLaunchingData.map((item, index) => (
          <div className={styles.buttonBoxs}>
            <button
              key={index}
              id={item.id}
              onClick={() => handleActiveClick(index)}
            >
              {item.question}
              <span>
                {click === index ? (
                  <i class='fas fa-arrow-down small'></i>
                ) : (
                  <i class='fas fa-arrow-right small'></i>
                )}
              </span>
              {click === index ? (
                <p key={index} className={styles.answers}>
                  {item.showText}
                </p>
              ) : null}
            </button>
          </div>
        ))}
      </div>
      <h3>Buying From Marketplace</h3>
      <div className={styles.answersQuestions}>
        {faqBuingData.map((item, index) => (
          <div className={styles.buttonBoxs}>
            <button
              key={index}
              id={item.id}
              onClick={() => handleActiveClick(index)}
            >
              {item.question}
              <span>
                {click === index ? (
                  <i class='fas fa-arrow-down small'></i>
                ) : (
                  <i class='fas fa-arrow-right small'></i>
                )}
              </span>
              {click === index ? (
                <p key={index} className={styles.answers}>
                  {item.showText}
                </p>
              ) : null}
            </button>
          </div>
        ))}
      </div>
      <h3> Managed Contest</h3>
      <div className={styles.answersQuestions}>
        {faqManagedData.map((item, index) => (
          <div className={styles.buttonBoxs}>
            <button
              key={index}
              id={item.id}
              onClick={() => handleActiveClick(index)}
            >
              {item.question}
              <span>
                {click === index ? (
                  <i class='fas fa-arrow-down small'></i>
                ) : (
                  <i class='fas fa-arrow-right small'></i>
                )}
              </span>
              {click === index ? (
                <p key={index} className={styles.answers}>
                  {item.showText}
                </p>
              ) : null}
            </button>
          </div>
        ))}
      </div>
      <h3>For Creatives</h3>
      <div className={styles.answersQuestions}>
        {faqForCreativesData.map((item, index) => (
          <div className={styles.buttonBoxs}>
            <button
              key={index}
              id={item.id}
              onClick={() => handleActiveClick(index)}
            >
              {item.question}
              <span>
                {click === index ? (
                  <i class='fas fa-arrow-down small'></i>
                ) : (
                  <i class='fas fa-arrow-right small'></i>
                )}
              </span>
              {click === index ? (
                <p key={index} className={styles.answers}>
                  {item.showText}
                </p>
              ) : null}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqsBoxs;
