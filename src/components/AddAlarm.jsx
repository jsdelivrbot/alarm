import React, { Component } from 'react';

import { addAlarm } from '../actions/index';

class AddAlarm extends Component {
    constructor(props) {
        super(props);
        this.state = { delay: '' };
    }

    onInputChange = (e) => {
        const value = parseInt(e.target.value, 10) || '';
        if (typeof value === 'number' || value === '') {
            this.setState({delay: value});
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const delay = this.state.delay;
        if (delay) {
            this.props.addAlarm(delay);
            this.setState({ delay: '' });
        }
    }

    render() {
        return (
            <form
              onSubmit={this.onFormSubmit}
              className='add-alarm'>
                <input
                  onChange={this.onInputChange}
                  value={this.state.delay}
                  placeholder='Add delay in ms'
                  className='add-alarm-input'
                  type='text'
                />
                <span className='add-alarm-button-wrapper'>
                    <button
                      type='submit'
                      className='button'>
                      Add Alarm
                    </button>
                </span>
            </form>
        );
    }
}

export default AddAlarm