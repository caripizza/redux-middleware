export const isPromise = payload => {
  // check if payload is a promise
  // if yes, return true
  // if no, return false
  return Promise.resolve(payload) === payload;
  // OR:
  // return payload && typeof payload.then === 'function';
};

export const promiseMiddleware = store => next => action => {
  // check if action.payload is a promise
  // if no, do standard action
  if(!isPromise(action.payload)) {
    return next(action);
  }
  // if yes, dispatch a loadstart+loadend action
  store.dispatch({ type: 'LOAD_START' });
  action.payload.then(payload => {
    store.dispatch({ type: 'LOAD_END' });
    store.dispatch({
      type: action.type,
      payload
    });
  })
    .catch(err => {
      store.dispatch({
        type: 'PROMISE_ERROR',
        payload: err
      });
      store.dispatch({
        type: 'LOAD_END'
      });
    });
};
