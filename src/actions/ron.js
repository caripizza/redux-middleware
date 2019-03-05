import { getFacts } from '../services/ronApi';

export const FETCH_FACTS = 'FETCH_FACTS';
export const fetchFacts = count => dispatch => {
  // fetch from API
  return getFacts(count)
  // .then dispatch an action where the payload is the result of the fetch
  // actions are objects with { type, payload }
    .then(facts => {
      dispatch({
        type: FETCH_FACTS,
        payload: facts
      });
    });
};
