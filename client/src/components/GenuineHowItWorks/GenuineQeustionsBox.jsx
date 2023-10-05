import React, { Component } from 'react';
import styles from './GenuineHowItWorks.module.sass';
import CONSTANTS from '../../constants';

class GenuineQeustionsBox extends Component {
  renderLists = CONSTANTS.QUESTIONS_LIST.map(item => {
    return (
      <li>
        <div className={styles.arrowBox}>
          <span>{item.arrow}</span>
        </div>
        <div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          <a href=''>{item.a}</a>
        </div>
      </li>
    );
  });

  render () {
    return (
      <div className={styles.questionsBoxWhite}>
        <ul>
          {this.renderLists}
          <div className={styles.questionsBoxBlue}>
            <h4>Questions?</h4>
            <p>
              Speak with a Squadhelp platform expert to learn more and get your
              questions answered.
            </p>
            <button>Shedule Consultation</button>
            <div>
              <a href='tel:{CONSTANTS.CONTACTS_INFO.PHONE}'>
                {CONSTANTS.SOCIAL_NETWORKS_ICONS.PHONE}
                &nbsp; &nbsp;
                <span>{CONSTANTS.CONTACTS_INFO.PHONE}</span>
              </a>
            </div>
            <p>Call us for assistance</p>
          </div>
        </ul>
      </div>
    );
  }
}

export default GenuineQeustionsBox;
