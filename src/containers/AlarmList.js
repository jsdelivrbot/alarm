import { connect } from 'react-redux';

import AlarmList from '../components/AlarmList';

const mapStateToProps = (store, ownProps) => {
    const {alarms} = store;
    return {
        alarms
    };
};

export default connect(
    mapStateToProps,
    null
)(AlarmList);
