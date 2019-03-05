import { thunk } from './thunk';
import { createStore, applyMiddleware } from 'redux';

describe('thunk middleware', () => {
  let reducer = null;
  let store = null;

  beforeEach(() => {
    reducer = jest.fn();
    store = createStore(
      reducer, 
      applyMiddleware(
        thunk
      )
    );
  });

  it('behaves normally when action is an object', () => {
    const action = {
      type: 'AN_ACTION',
    };
    store.dispatch(action);
    expect(reducer).toHaveBeenCalledWith(undefined, action);
  });

  it('invokes action if action is a function', () => {
    const action = jest.fn();
    store.dispatch(action);
    expect(action).toHaveBeenCalledWith(expect.any(Function), store.getState);
  });
});
