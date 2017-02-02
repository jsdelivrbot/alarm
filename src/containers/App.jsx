import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

import { addAlarm, removeAlarm } from '../actions/index';

import AddAlarm from '../components/AddAlarm';
import AlarmList from '../components/AlarmList';

const App = ({ alarms, addAlarm, removeAlarm }) => {
    return (
      <div>
        <AddAlarm addAlarm={addAlarm} />
        <AlarmList alarms={alarms} removeAlarm={removeAlarm} />
      </div>
    );
};

const mapStateToProps = (store, ownProps) => {
    const {alarms} = store;
    return {
        alarms
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addAlarm, removeAlarm }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
