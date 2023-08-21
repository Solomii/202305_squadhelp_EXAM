import React, { Component } from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Payment from './pages/Payment';
import StartContestPage from './pages/StartContestPage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ContestPage from './pages/ContestPage';
import UserProfile from './pages/UserProfile';
import ContestCreationPage from './pages/ContestCreation';
import NotFound from './components/NotFound';
import ChatContainer from './components/Chat/ChatComponents/ChatContainer';
import { WithAuth, WithNotAuth } from './components/HOCs';
import CONSTANTS from './constants';
import browserHistory from './browserHistory';

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/login'
            component={WithNotAuth(LoginPage)}
          />
          <Route
            exact
            path='/registration'
            component={WithNotAuth(RegistrationPage)}
          />
          <Route exact path='/payment' component={WithAuth(Payment)} />
          <Route
            exact
            path='/start-contest'
            component={WithAuth(StartContestPage)}
          />
          <Route
            exact
            path='/start-contest/name-contest'
            component={WithAuth(ContestCreationPage, {
              contestType: CONSTANTS.NAME_CONTEST,
              title: 'Company Name',
            })}
          />
          <Route
            exact
            path='/start-contest/tag-line-contest'
            component={WithAuth(ContestCreationPage, {
              contestType: CONSTANTS.TAGLINE_CONTEST,
              title: 'TAGLINE',
            })}
          />
          <Route
            exact
            path='/start-contest/logo-contest'
            component={WithAuth(ContestCreationPage, {
              contestType: CONSTANTS.LOGO_CONTEST,
              title: 'LOGO',
            })}
          />
          <Route exact path='/dashboard' component={WithAuth(Dashboard)} />
          <Route
            exact
            path='/contest/:id'
            component={WithAuth(ContestPage)}
          />
          <Route exact path='/account' component={WithAuth(UserProfile)} />
          <Route component={NotFound} />
        </Switch>
        <ChatContainer />
      </Router>
    );
  }
}

export default App;
