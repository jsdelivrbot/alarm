import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = { delay: props.delay };
    }

    componentDidMount() {
        this.runTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    tick = () => {
        if (this.state.delay) {
            this.setState({ delay: this.state.delay - 1});
        } else {
            this.showAlert();
            this.stopTimer();
        }
    }

    runTimer() {
        this.timer = setInterval(this.tick, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    showAlert() {
        alert('ALERT!');
        this.props.removeAlarm(this.props.id);
    }

    parseTime(s) {
        const minTwoDigits = (n) => {
            return (n < 10 ? '0' : '') + n;
        }
        var total = s,
            days,
            hours,
            minutes,
            seconds;
        days = Math.floor(total / 86400);
        total -= days * 86400;
        hours = minTwoDigits((Math.floor(total / 3600) % 24));
        total -= hours * 3600;
        minutes = minTwoDigits((Math.floor(total / 60) % 60));
        total -= minutes * 60;
        seconds = minTwoDigits((total % 60));
        return `${hours}:${minutes}:${seconds}`;
    }

    render() {
        return (
            <span className='timer'>
                {this.parseTime(this.state.delay)}
            </span>
        );
    }
}

export default Timer