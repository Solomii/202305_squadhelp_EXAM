import React, { Component, useState } from 'react';
import styles from './GenuineHowItWorks.module.sass';
import { questionsAnswersData } from './questionAnswerData';

class GenuineLaunchingContest extends Component {
  constructor (props) {
    super(props);
    this.state = {
      testQueston: 0,
      testAnswer: 0,
      isShow: false,
    };
  }
  handleButtonSwitch = () => {
    const { isShow } = this.state;
    this.setState({ isShow: !isShow });
  };

  // listQuestion = questionsAnswersData.map((item, index) => {
  //   return (
  //     <span>
  //       {item.question}
  //       <i class='fas fa-arrow-down small'></i>
  //     </span>
  //   );
  // });

  // listShow = questionsAnswersData.map(item => {
  //   return <p key={item.id}> {item.showText}</p>;
  // });

  render () {
    const { testQueston, testAnswer, isShow } = this.state;
    return (
      <div>
        {/* <div>blue div Launching A constest</div> */}
        {/* <div>
          <h3>Launching A Contest</h3>
          <div>
            <div>
              <button type='button' onClick={this.handleButtonSwitch}>
                How long does it take to start receiving submissions?
                <i class='fas fa-arrow-down small'></i>
              </button>
              {isShow && (
                <div>
                  <p>
                    For Naming contests, you will start receiving your
                    submissions within few minutes of launching your contest.
                    Since our creatives are located across the globe, you can
                    expect to receive submissions 24 X 7 throughout the duration
                    of the brainstorming phase .
                  </p>
                </div>
              )}
            </div>
          </div>
        </div> */}
        <div>
          <div type='button' onClick={this.handleButtonSwitch}>
            {questionsAnswersData.map((item, index) => {
              return (
                <ul>
                  <li key={index.id}>
                    <button>
                      {item.question}
                      <i class='fas fa-arrow-down small'></i>
                    </button>
                    {isShow && <p key={item.id}>{item.showText}</p>}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default GenuineLaunchingContest;
