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
              <a href='' target='_blank'>
                <svg
                  class='sh-footer--social-icon'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  width='30px'
                >
                  <path
                    d='M23.9938 24V23.999H23.9998V15.197C23.9998 10.891 23.0728 7.57397 18.0388 7.57397C15.6188 7.57397 13.9948 8.90198 13.3318 10.161H13.2618V7.97597H8.48877V23.999H13.4588V16.065C13.4588 13.976 13.8548 11.956 16.4418 11.956C18.9908 11.956 19.0288 14.34 19.0288 16.199V24H23.9938Z'
                    fill='#0077B5'
                  ></path>
                  <path
                    d='M0.395996 7.97705H5.372V24H0.395996V7.97705Z'
                    fill='#0077B5'
                  ></path>
                  <path
                    d='M2.882 0C1.291 0 0 1.291 0 2.882C0 4.473 1.291 5.791 2.882 5.791C4.473 5.791 5.764 4.473 5.764 2.882C5.763 1.291 4.472 0 2.882 0V0Z'
                    fill='#0077B5'
                  ></path>
                </svg>
              </a>
              <a href='' target='_blank'>
                <svg
                  class='sh-footer--social-icon'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  width='30px'
                >
                  <path
                    d='M1.49971 1.63305C-0.386289 3.59205 -0.000289023 5.67305 -0.000289023 11.995C-0.000289023 17.245 -0.916289 22.508 3.87771 23.747C5.37471 24.132 18.6387 24.132 20.1337 23.745C22.1297 23.23 23.7537 21.611 23.9757 18.788C24.0067 18.394 24.0067 5.60305 23.9747 5.20105C23.7387 2.19405 21.8877 0.461046 19.4487 0.110046C18.8897 0.0290464 18.7777 0.00504639 15.9097 4.63948e-05C5.73671 0.00504639 3.50671 -0.447954 1.49971 1.63305Z'
                    fill='url(#paint0_linear)'
                  ></path>
                  <path
                    d='M11.9978 3.13892C8.36681 3.13892 4.91881 2.81592 3.60181 6.19592C3.05781 7.59192 3.13681 9.40492 3.13681 12.0009C3.13681 14.2789 3.06381 16.4199 3.60181 17.8049C4.91581 21.1869 8.39181 20.8629 11.9958 20.8629C15.4728 20.8629 19.0578 21.2249 20.3908 17.8049C20.9358 16.3949 20.8558 14.6089 20.8558 12.0009C20.8558 8.53892 21.0468 6.30392 19.3678 4.62592C17.6678 2.92592 15.3688 3.13892 11.9938 3.13892H11.9978ZM11.2038 4.73592C18.7778 4.72392 19.7418 3.88192 19.2098 15.5789C19.0208 19.7159 15.8708 19.2619 11.9988 19.2619C4.93881 19.2619 4.73581 19.0599 4.73581 11.9969C4.73581 4.85192 5.29581 4.73992 11.2038 4.73392V4.73592ZM16.7278 6.20692C16.1408 6.20692 15.6648 6.68292 15.6648 7.26992C15.6648 7.85692 16.1408 8.33292 16.7278 8.33292C17.3148 8.33292 17.7908 7.85692 17.7908 7.26992C17.7908 6.68292 17.3148 6.20692 16.7278 6.20692ZM11.9978 7.44992C9.48481 7.44992 7.44781 9.48792 7.44781 12.0009C7.44781 14.5139 9.48481 16.5509 11.9978 16.5509C14.5108 16.5509 16.5468 14.5139 16.5468 12.0009C16.5468 9.48792 14.5108 7.44992 11.9978 7.44992ZM11.9978 9.04692C15.9028 9.04692 15.9078 14.9549 11.9978 14.9549C8.09381 14.9549 8.08781 9.04692 11.9978 9.04692Z'
                    fill='white'
                  ></path>
                  <defs>
                    <linearGradient
                      id='paint0_linear'
                      x1='1.54573'
                      y1='22.4671'
                      x2='23.8512'
                      y2='3.16202'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#FFDD55'></stop>
                      <stop offset='0.5' stop-color='#FF543E'></stop>
                      <stop offset='1' stop-color='#C837AB'></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a href='' target='_blank'>
                <svg
                  class='sh-footer--twitter-icon'
                  viewBox='0 0 24 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  width='30px'
                >
                  <path
                    d='M21.552 5.749C21.552 5.532 21.544 5.321 21.534 5.113C22.51 4.42 23.331 3.555 24 2.559V2.558C23.107 2.949 22.157 3.209 21.165 3.335C22.185 2.726 22.964 1.769 23.33 0.616C22.379 1.183 21.329 1.583 20.21 1.807C19.307 0.845 18.02 0.25 16.616 0.25C13.892 0.25 11.699 2.461 11.699 5.171C11.699 5.561 11.732 5.936 11.813 6.293C7.723 6.093 4.103 4.133 1.671 1.146C1.247 1.883 0.997 2.726 0.997 3.633C0.997 5.337 1.874 6.847 3.183 7.722C2.392 7.707 1.617 7.477 0.96 7.116V7.17C0.96 9.561 2.665 11.547 4.902 12.005C4.15 12.211 3.224 12.203 2.681 12.083C3.318 14.031 5.128 15.464 7.278 15.511C5.604 16.82 3.478 17.609 1.177 17.609C0.774 17.609 0.387 17.591 0 17.542C2.18 18.947 4.762 19.75 7.548 19.75C16.602 19.75 21.552 12.25 21.552 5.749Z'
                    fill='#55ACEE'
                  ></path>
                </svg>
              </a>
              <a href='' target='_blank'>
                <svg
                  class='sh-footer--social-icon'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  width='30px'
                >
                  <path
                    d='M21 0H3C1.345 0 0 1.345 0 3V21C0 22.654 1.345 24 3 24H21C22.654 24 24 22.654 24 21V3C24 1.345 22.654 0 21 0Z'
                    fill='#3B5999'
                  ></path>
                  <path
                    d='M16.5 12V9C16.5 8.172 17.172 8.25 18 8.25H19.5V4.5H16.5C14.014 4.5 12 6.514 12 9V12H9V15.75H12V24H16.5V15.75H18.75L20.25 12H16.5Z'
                    fill='white'
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterHowItWorks;
