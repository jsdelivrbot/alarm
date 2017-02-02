import React, { PropTypes } from 'react';

import Alarm from '../components/Alarm';

const AlarmList = ({ alarms, removeAlarm }) => {
    return (
      <ul className="alarm-list">
        {alarms.map(alarm =>
            <Alarm
              key={alarm.id}
              alarm={alarm}
              removeAlarm={removeAlarm}
            />
        )}
      </ul>
    );
};

AlarmList.propTypes = {
    alarms: PropTypes.array.isRequired,
}

export default AlarmList