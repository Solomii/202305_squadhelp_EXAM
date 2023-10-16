import React, { Component } from 'react';
import styles from './GenuineHowItWorks.module.sass';
import CONSTANTS from '../../constants';

class GenuineWaysToUse extends Component {
  genuineWayToUseItemsRender = item => (
    <div key={item.title} >
      <p>{item.image}</p>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <a>{item.fillerButton}</a>
    </div>
  );

  genuineBoxsWaysToUseRender () {
    return CONSTANTS.GENUINE_THREE_WAYS_TO_USE.map(item =>
      this.genuineWayToUseItemsRender(item)
    );
  }

  render () {
    return (
      <div className={styles.genuineBoxWaysToUse}>
        {this.genuineBoxsWaysToUseRender()}
      </div>
    );
  }
}

export default GenuineWaysToUse;
