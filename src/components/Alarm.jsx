import React, { Component, PropTypes } from 'react';

import Timer from '../components/Timer';

class Alarm extends Component {
    constructor(props) {
        super(props);
    }

    onButtonClick = (e) => {
        var id = parseInt(e.target.parentNode.id, 10);
        this.props.removeAlarm(id);
    }

    render() {
        return (
            <li className='alarm'
                id={this.props.alarm.id}>
                <Timer
                  delay={this.props.alarm.delay}
                  id={this.props.alarm.id}
                />
                <button
                  onClick={this.onButtonClick}
                  className='button alarm-button'>
                  Remove Alarm
                </button>
            </li>
        );
    }
}

Alarm.propTypes = {
    alarm: PropTypes.object.isRequired,
    removeAlarm: PropTypes.func.isRequired,
}

export default Alarm