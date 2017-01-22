import React, { PropTypes } from 'react';

import Alarm from '../containers/Alarm';

const AlarmList = ({ alarms }) => {
    return (
      <ul className="alarm-list">
        {alarms.map(alarm =>
            <Alarm
              key={alarm.id}
              alarm={alarm}
            />
        )}
      </ul>
    );
};

AlarmList.propTypes = {
    alarms: PropTypes.array.isRequired,
}

export default AlarmList