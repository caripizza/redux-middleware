import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchFacts, FETCH_FACTS } from './ron';

jest.mock('../services/ronApi.js');

describe('ron actions', () => {
  it('fetchFacts creates an action where payload is facts', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
    store.dispatch(fetchFacts(10));
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_FACTS,
        payload: ['this is a fact']
      });
      done();
    }, 500);
  });
});
