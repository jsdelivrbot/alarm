import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedComponentsWithType
} from 'react-addons-test-utils';
import Timer from '../../src/components/Timer';
import AlarmList from '../../src/components/AlarmList';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../src/reducers';
import { expect } from 'chai';

describe('Timer', () => {

    it('should render a Timer component for each alarm item', () => {
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
        const alarmsElem = scryRenderedComponentsWithType(component, Timer);
        const alarm1 = ReactDOM.findDOMNode(alarmsElem[0]).textContent;
        const alarm2 = ReactDOM.findDOMNode(alarmsElem[1]).textContent;
        const alarm3 = ReactDOM.findDOMNode(alarmsElem[2]).textContent;

        expect(alarmsElem.length).to.equal(3);
        expect(alarm1).to.equal('00:50:00');
        expect(alarm2).to.equal('00:05:00');
        expect(alarm3).to.equal('00:16:40');
    });
});