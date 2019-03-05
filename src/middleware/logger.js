/* eslint-disable no-console */

// function logger(store) {
//   return function(next) {
//     return function(action) {
//     }
//   }
// }
// above is shortened to:
export const logger = store => next => action => {
  console.log('incoming action', action);

  const prevState = store.getState();

  next(action);

  const nextState = store.getState();

  if(prevState !== nextState) {
    console.log('state updated', action);
  }
};
