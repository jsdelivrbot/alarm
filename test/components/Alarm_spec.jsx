import React from 'react';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import Alarm from '../../src/components/Alarm';
import Timer from '../../src/containers/Timer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../src/reducers';
import { expect } from 'chai';

describe('Alarm', () => {
    it('should render a div with "alarm" class', () => {
        const alarm = {delay: '3000', id: '1'};
        const component = renderIntoDocument(
            <Provider store={applyMiddleware()(createStore)(reducers)}>
                <Alarm
                  key={alarm.id}
                  alarm={alarm}
                />
            </Provider>
        );
        const alarmElem = findRenderedDOMComponentWithClass(component, 'alarm');

        expect(alarm).to.be.ok;
    });

    it('should render a div with the remove button', () => {
        const alarm = {delay: '300', id: '1'};
        const component = renderIntoDocument(
            <Provider store={applyMiddleware()(createStore)(reducers)}>
                <Alarm
                  key={alarm.id}
                  alarm={alarm}
                />
            </Provider>
        );
        const alarmElem = findRenderedDOMComponentWithTag(component, 'button');
        const alarmText = alarmElem.textContent;

        expect(alarmText).to.equal('Remove Alarm');
    });
});