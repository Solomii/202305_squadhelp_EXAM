import React, { Component } from 'react';
import styles from './FooterHowItWorks.module.sass';
import CONSTANTS from '../../constants';

class Footer extends Component {
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
    return CONSTANTS.FooterItemsHowItWorks.map(item =>
      this.topFooterItemsRender(item)
    );
  }

  render () {
    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLinks}>{this.topFooterRender()}</div>
          <div>
            <div>
              <h2>Trending Searches</h2>
              <p>
                Explore our unique, hand-picked brand & business names for sale
                along with a matching, premium domain name. Buy instantly for a
                fixed low price.
              </p>
              <form action=''>
                <input type='text' placeholder='Search over 75,000 Names' />
              </form>
            </div>
            <div>
              <button>Short Names</button>
              <button>Short Names</button>
              <button>Short Names</button>
              <button>Short Names</button>
            </div>
          </div>
          <div>
            <p>Copyright © 2023 Squadhelp Inc</p>
            <a>
              Squadhelp.com has a Shopper Approved rating of 4.9/5 based on 2782
              ratings and reviews
            </a>
            <ul>
              <li><a href=""><img src="" alt="in" /></a></li>
              <li><a href=""><img src="" alt="in" /></a></li>
              <li><a href=""><img src="" alt="twitter" /></a></li>
              <li><a href=""><img src="" alt="facebook" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
