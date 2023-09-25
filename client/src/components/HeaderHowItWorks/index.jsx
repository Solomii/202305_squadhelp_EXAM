import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './HeaderHowItWorks.module.sass';
import Logo from '../Logo';
import CONSTANTS from '../../constants';

class HeaderHowItWorks extends React.Component {
  startContests = () => {
    this.props.history.push('/start-contest');
  };

  render () {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div className={styles.headerContainer}>
        <div className={styles.navContainerTest}>
          <Logo className={styles.logo} alt='blue_logo' />
          <form>
            <input type='text' placeholder='Search over 1000,000 names' />
          </form>
          <div className={styles.leftNav}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <span>Account</span>
                  <ul>
                    <li>
                      <a href='http://www.google.com'>Login</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Singup</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <span>Contacts</span>
                  <ul>
                    <li>
                      <a href='http://www.google.com'>(877) 355-3585</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Chat</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Email</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Help Desk</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <span>Favorites</span>
                </li>
              </ul>
              <div
                className={styles.startContestBtn}
                onClick={this.startContests}
              >
                START CONTEST
              </div>
            </nav>
          </div>
        </div>

        <div className={styles.navBottomContainer}>
          <div className={styles.bottomNav}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <span>Name For Sale</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <ul>
                    <li>
                      <a href='http://www.google.com'>
                        Popular Brandable Names
                      </a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>
                        Popular Domains For Sale
                      </a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Short Domains</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>One Word Names</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Indastry Domains</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Location Based Name</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Recommended For You</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Become A Seller</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Naming Contests</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <ul>
                    <li>
                      <a href='http://www.google.com'>Start A Contest</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>How It Works</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Contest Pricing</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Agency Services</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Our Work</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Recent Winners</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Active Contests</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Become A Creative</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Other Services</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <ul>
                    <li>
                      <a href='http://www.google.com'>Logos</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Taglines</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Audience Testing</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Trademark Research</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Trademark Filing</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Video Creation</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href='http://www.google.com'
                    className={styles.linkAgencyExperience}
                  >
                    <span>Agency Experience</span>
                  </a>
                </li>
                <li>
                  <span>Resources</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <ul>
                    <li>
                      <a href='http://www.google.com'>
                        Business Name Genarator
                      </a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>
                        How to Name Your Business
                      </a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Free Trademark Checker</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Industry Name Ideas</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HeaderHowItWorks);
