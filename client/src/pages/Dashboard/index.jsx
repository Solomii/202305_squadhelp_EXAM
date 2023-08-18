import React from 'react';
import { connect } from 'react-redux';
import CustomerDashboard from '../../components/CustomerDashboard';
import CreatorDashboard from '../../components/CreatorDashboard';
import Header from '../../components/Header';
import CONSTANTS from '../../constants';

const Dashboard = props => {
  const { role, history } = props;
  return (
    <div>
      <Header />
      {role === CONSTANTS.CUSTOMER ? (
        <CustomerDashboard history={history} match={props.match} />
      ) : (
        <CreatorDashboard history={history} match={props.match} />
      )}
    </div>
  );
};

const mapStateToProps = state => state.userStore.data;

export default connect(mapStateToProps)(Dashboard);
