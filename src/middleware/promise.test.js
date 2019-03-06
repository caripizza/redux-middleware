import { isPromise, promiseMiddleware } from './promise';
import { createStore, applyMiddleware } from 'redux';

describe('promise middleware', () => {
  describe('isPromise', () => {
    it('returns false if not passed a promise', () => {
      const result = isPromise(123);
      expect(result).toBeFalsy();
    });

    it('returns true if passed a promise', () => {
      const promise = Promise.resolve(123);
      const result = isPromise(promise);
      expect(result).toBeTruthy();
    });
  });

  describe('promiseMiddleware', () => {
    let reducer = null;
    let store = null;

    beforeEach(() => {
      reducer = jest.fn();
      store = createStore(
        reducer,
        applyMiddleware(promiseMiddleware)
      );
    });

    it('dispatches all actions on promise resolve', () => {
      const promise = Promise.resolve(123);
      const action = {
        type: 'AN_ACTION',
        payload: promise
      };
      store.dispatch(action);
      return promise.then(() => {
        // 'undefined' is state here:
        expect(reducer).toHaveBeenCalledWith(undefined, {
          type: 'LOAD_START'
        });
        expect(reducer).toHaveBeenCalledWith(undefined, {
          type: 'LOAD_END'
        });
        expect(reducer).toHaveBeenCalledWith(undefined, {
          type: 'AN_ACTION',
          payload: 123
        });
      });
    });

    it('dispatches all actions on promise reject', () => {
      const promise = Promise.reject(123);
      const action = {
        type: 'AN_ACTION',
        payload: promise
      };
      store.dispatch(action);
      return promise.catch(() => {})
        .finally(() => {
          expect(reducer).toHaveBeenCalledWith(undefined, {
            type: 'LOAD_START'
          });
          expect(reducer).toHaveBeenCalledWith(undefined, {
            type: 'PROMISE_ERROR',
            payload: 123
          });
          expect(reducer).toHaveBeenCalledWith(undefined, {
            type: 'LOAD_END'
          });
        });
    });
  });
});
