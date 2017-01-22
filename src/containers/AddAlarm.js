import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addAlarm } from '../actions/index';
import AddAlarm from '../components/AddAlarm';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addAlarm }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(AddAlarm);
