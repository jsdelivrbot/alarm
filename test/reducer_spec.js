import alarms from '../src/reducers/reducerAlarm';
import { expect } from 'chai';

describe('reducer', () => {
    describe('ADD_ALARM', () => {
        it('should add a new Alarm item', () => {
            const initialState = [{delay: '3000', id: '1'}];
            const action = {
                type: 'ADD_ALARM',
                delay: '300',
                id: '2'
            };
            const nextState = alarms(initialState, action);
            expect(nextState).to.deep.equal([{delay: '3000', id: '1'}, {delay: '300', id: '2'}]);
        });
    });

    describe('REMOVE_ALARM', () => {
        it('should remove a given Alarm item', () => {
            const initialState = [{delay: '3000', id: '1'}, {delay: '300', id: '2'}];
            const action = {
                type: 'REMOVE_ALARM',
                id: '1'
            };
            const nextState = alarms(initialState, action);

            expect(nextState).to.deep.equal([{delay: '300', id: '2'}]);
        });

        it('should do nothing if the Alarm item to remove is not present', () => {
            const initialState = ['3000', '300'];
            const action = {
                type: 'REMOVE_ALARM',
                id: '3'
            };
            const nextState = alarms(initialState, action);

            expect(nextState).to.deep.equal(['3000', '300']);
        });
    });
});