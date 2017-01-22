import React, { Component } from 'react';

import AddAlarm from '../containers/AddAlarm';
import AlarmList from '../containers/AlarmList';

class App extends Component {
    render() {
        return (
          <div>
            <AddAlarm />
            <AlarmList />
          </div>
        );
    }
}

export default App