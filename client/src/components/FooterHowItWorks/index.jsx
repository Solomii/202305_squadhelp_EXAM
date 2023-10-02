import React, { Component } from 'react';
import styles from './FooterHowItWorks.module.sass';
import CONSTANTS from '../../constants';

class FooterHowItWorks extends Component {
  topFooterItemsRender = item => (
    <div key={item.title}>
      <h2>{item.title}</h2>
      {item.items.map(i => (
        <a key={i} href='https://google.com'>
          {i}
        </a>
      ))}
    </div>
  );

  topFooterRender () {
    return CONSTANTS.FOOTER_HOW_IT_WORKS.map(item =>
      this.topFooterItemsRender(item)
    );
  }

  render () {
    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLinks}>{this.topFooterRender()}</div>
          <div className={styles.footerMainSearch}>
            <div className={styles.footerMainInputBox}>
              <h2>Trending Searches</h2>
              <p>
                Explore our unique, hand-picked brand & business names for sale
                along with a matching, premium domain name. Buy instantly for a
                fixed low price.
              </p>
              <form>
                <input type='text' placeholder='Search over 75,000 Names' />
                <button className={styles.inputSearchButton}>
                  <i className='fas fa-search fa-lg' aria-hidden='true' />
                </button>
              </form>
            </div>
            <div className={styles.footerMainSearchButtonsBox}>
              <div>
                <a href='https://google.com'>
                  {CONSTANTS.SEARCHES_IMG_FOR_BUTTON}
                  <span>ShortNames</span>
                </a>
              </div>
              <div>
                <a href='https://google.com'>
                  {CONSTANTS.SEARCHES_IMG_FOR_BUTTON}
                  <span>OneWord</span>
                </a>
              </div>
              <div>
                <a href='https://google.com'>
                  {CONSTANTS.SEARCHES_IMG_FOR_BUTTON}
                  <span>4-letter</span>
                </a>
              </div>

              <div>
                <a href='https://google.com'>
                  {CONSTANTS.SEARCHES_IMG_FOR_BUTTON}
                  <span>5-letter</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div>
              <p>Copyright © 2023 Squadhelp Inc</p>
            </div>
            <div>
              <a href='https://google.com' target='_blank'>
                Squadhelp.com has a Shopper Approved rating of 4.9/5 based on
                2782 ratings and reviews
              </a>
            </div>
            <div>
              <a href='https://google.com' target='_blank'>
                {CONSTANTS.SOCIAL_NETWORKS_ICONS.LINKEDIN}
              </a>
              <a href='https://google.com' target='_blank'>
                {CONSTANTS.SOCIAL_NETWORKS_ICONS.INSTAGRAM}
              </a>
              <a href='https://google.com' target='_blank'>
                {CONSTANTS.SOCIAL_NETWORKS_ICONS.TWITTER}
              </a>
              <a href='https://google.com' target='_blank'>
                {CONSTANTS.SOCIAL_NETWORKS_ICONS.FACEBOOK}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterHowItWorks;
