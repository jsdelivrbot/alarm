import React from 'react';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithTag,
    Simulate
} from 'react-addons-test-utils';
import { expect } from 'chai';

import AddAlarm from '../../src/components/AddAlarm';

describe('AddAlarm', () => {
    it('should render an input field and button', () => {
        const component = renderIntoDocument(
            <AddAlarm />
        );
        const inputField = findRenderedDOMComponentWithTag(component, 'input');
        const button = findRenderedDOMComponentWithTag(component, 'button');

        expect(inputField).to.be.ok;
        expect(button).to.be.ok;
    });

});