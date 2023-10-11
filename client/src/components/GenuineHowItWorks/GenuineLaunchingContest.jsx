import React, { Component, useState } from 'react';
import styles from './GenuineHowItWorks.module.sass';
import {
  questionsAnswersData,
  questionsAswersBuingData,
  questionsAswersManagedData,
  questionsAswersForCreativesData,
} from './questionAnswerData';

class GenuineLaunchingContest extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }
  handleButtonSwitch = () => {
    const { isShow } = this.state;
    this.setState({ isShow: !isShow });
  };

  render () {
    const { isShow } = this.state;
    return (
      <div>
        {/* <div>blue div Launching A constest</div> */}
        <div>
          {/* <div>
          <h3>Launching A Contest</h3>
          <div>
            <ul>
            {questionsAnswersData.map((item) => {
              return (
              
                  <li key={item.id}>
                    <button  type='button' onClick={this.handleButtonSwitch}>
                      {item.question}
                      <i class='fas fa-arrow-down small'></i>
                    </button>
                    {isShow && <p key={item.id}>{item.showText}</p>}
                  </li>
              
              );
            })}
              </ul>
          </div>
        </div>
        <div>
          <br />
          <h3>Buying From Marketplace</h3>
          <div>
         <ul>
            {questionsAswersBuingData.map((item) => {
              return (
                
                  <li key={item.id}>
                    <button type='button' onClick={this.handleButtonSwitch}>
                      {item.question}
                      <i class='fas fa-arrow-down small'></i>
                    </button>
                    {isShow && <p key={item.id}>{item.showText}</p>}
                  </li>
              
              );
            })}
              </ul>
          </div>
        </div>
        <div>
          <br />
          <h3>Managed Contests</h3>
          <div >
           <ul>
            {questionsAswersManagedData.map((item) => {
              return (
               
                  <li key={item.id}>
                    <button type='button' onClick={this.handleButtonSwitch}>
                      {item.question}
                      <i class='fas fa-arrow-down small'></i>
                    </button>
                    {isShow && <p key={item.id}>{item.showText}</p>}
                  </li>
              
              );
            })}
              </ul>
          </div>
        </div> */}
          <div>
            <br />
            <h3>For Creatives</h3>
            <div>
              <ul>
                {questionsAswersForCreativesData.map(item => {
                  return (
                    <li>
                      <button
                        key={item.id}
                        type='button'
                        onClick={this.handleButtonSwitch}
                      >
                        {item.question}
                        <i class='fas fa-arrow-down small'></i>
                      </button>
                      {isShow ? <p key={item.id}>{item.showText} </p> : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenuineLaunchingContest;
