import React, { Component } from 'react';
import styles from './GenuineHowItWorks.module.sass';
import CONSTANTS from '../../constants';

const questionList = [
  {
    title: 'Pay a Fraction of cost vs hiring an agency',
    text: 'For as low as $199, our naming contests and marketplace allow you to  get an amazing brand quickly and affordably.',
  },
  {
    title: 'Satisfaction Guarantee',
    text: 'Of course! We have policies in place to ensure that you are satisfied with your experience.',
  },
];

class GenuineQeustionsBox extends Component {
  render () {
    return (
      <div className={styles.questionsBox}>
        <h4>Questions?</h4>
        <p>
          Speak with a Squadhelp platform expert to learn more and get your
          questions answered.
        </p>
        <div>
          <button>Shedule Consultation</button>
        </div>
        <div>
          <a href='tel:{CONSTANTS.CONTACTS_INFO.PHONE}'>
            <img
              className={styles.phone}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`}
              alt='phone'
            />
            <span>
              &nbsp;
              {CONSTANTS.CONTACTS_INFO.PHONE}
            </span>
          </a>
        </div>

        <p>Call us for assistance</p>
      </div>
    );
  }
}

export default GenuineQeustionsBox;
