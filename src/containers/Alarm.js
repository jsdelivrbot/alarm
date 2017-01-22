import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeAlarm } from '../actions/index';
import Alarm from '../components/Alarm';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ removeAlarm }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(Alarm);
