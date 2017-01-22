import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedComponentsWithType
} from 'react-addons-test-utils';
import AlarmList from '../../src/components/AlarmList';
import Alarm from '../../src/components/Alarm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../src/reducers';
import { expect } from 'chai';

describe('AlarmList', () => {
    it('should render a div with "alarm-list" class', () => {
        const store = [];
        const component = renderIntoDocument(
            <Provider store={applyMiddleware()(createStore)(reducers)}>
                <AlarmList alarms={store} />
            </Provider>
        );
        const alarmListElem = findRenderedDOMComponentWithClass(component, 'alarm-list');

        expect(alarmListElem).to.be.ok;
    });

    it('should render a Alarm component for each alarm item', () => {
        const store = [
            {delay: '3000', id: '1'},
            {delay: '300', id: '2'},
            {delay: '1000', id: '3'}
        ];
        const component = renderIntoDocument(
            <Provider store={applyMiddleware()(createStore)(reducers)}>
                <AlarmList alarms={store} />
            </Provider>
        );
        const alarmsElem = scryRenderedComponentsWithType(component, Alarm);

        expect(alarmsElem.length).to.equal(3);
    });
});