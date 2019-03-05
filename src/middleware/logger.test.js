/* eslint-disable no-console */
import { logger } from './logger';

describe('logger middleware', () => {
  it('logs an action', () => {
    console.log = jest.fn();
    const store = {
      getState() {
        return {
          words: 'test'
        };
      }
    };
    const next = jest.fn();
    const action = {
      type: 'UPDATE_WORDS',
      payload: 'New words'
    };
    logger(store)(next)(action);
    expect(console.log).toHaveBeenCalledWith('incoming action', {
      'payload': 'New words', 'type': 'UPDATE_WORDS'
    });
  });

  // it('logs updated state when action results in state change', () => {});
});
