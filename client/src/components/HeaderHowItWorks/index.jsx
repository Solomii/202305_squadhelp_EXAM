import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './HeaderHowItWorks.module.sass';
import Logo from '../Logo';
import CONSTANTS from '../../constants';
import SvgPerson from '../icons/SvgPerson';
import SvgPhone from '../icons/SvgPhone';
import SvgHeart from '../icons/SvgHeart';
import SvgVerticalLines from '../icons/SvgVerticalLines';
import SvgArrowDown from '../icons/SvgArrowDown';

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
        <div className={styles.navContainer}>
          <Logo className={styles.logo} alt='blue_logo' />
          <div className={styles.search}>
            <input
              type='text'
              className={styles.searchTerm}
              placeholder='Search over 1000,000 names'
            ></input>
            <button type='submit' className={styles.searchButton}>
              <svg
                class='sh-navbar--search-icon'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                onclick='if (!window.__cfRLUnblockHandlers) return false; searchInPremiumDomains(this)'
              >
                <path
                  strokelinecap='round'
                  strokelinejoin='round'
                  strokewidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
            </button>
          </div>
          <div className={styles.leftNav}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <div className={styles.wrapperNavSvg}>
                    <span>
                      <SvgPerson />
                    </span>
                    <span className={styles.spanHidden}>Account</span>
                  </div>
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
                  <div className={styles.wrapperNavSvg}>
                    <span>
                      <SvgPhone />
                    </span>
                    <span className={styles.spanHidden}>Contacts</span>
                  </div>
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
                  <div className={styles.wrapperNavSvg}>
                    <span>
                      <SvgHeart />
                    </span>
                    <span className={styles.spanHidden}>Favorites</span>
                  </div>
                </li>
              </ul>
              <div
                className={styles.startContestBtn}
                onClick={this.startContests}
              >
                <span>START CONTEST</span>
              </div>
            </nav>
          </div>
        </div>
        <div className={styles.navBottomContainer}>
          <div className={styles.bottomNav}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <span>Name&nbsp;For&nbsp;Sale</span>
                  <SvgArrowDown />
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
                  <span>Naming&nbsp;Contests</span>
                  <SvgArrowDown />
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
                  <span>Other&nbsp;Services</span>
                  <SvgArrowDown />
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
                    <span>Agency&nbsp;Experience</span>
                  </a>
                </li>
                <li>
                  <span>Resources</span>
                  <SvgArrowDown />
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
