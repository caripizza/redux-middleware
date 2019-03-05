# Promise middleware

Create Redux middleware that produces loading actions and
eventually an a new action (with the same action type) where
the payload is the result of the promise.

Treat this as a library. You're only writing your middleware
function and some tests for it. You don't need to require
redux, react, etc. (You may need redux for your tests, which
makes it a devDependency.)

## Middleware

Create an `src/middleware/promise.js` file and put your middleware code inside.

* Write an `isPromise` function to check if something is a promise
  * Promises have a `then` property which is a function
  * `const isPromise = payload => // CHECK`
* Check if the payload is a promise using the `isPromise` function
  * if the payload is not a promise return `next(action)`
* Dispatch a new loading action
  * e.g. `dispatch({ type: 'LOAD_START' })`
* Wait for the promise to resolve then...
  1. Dispatch a new done loading action
    * e.g. `dispatch({ type: 'LOAD_END' })`
  1. Dispatch a new action with the same type with the
    result of the promise
* In case of an error
  1. Dispatch a new done loading action
  1. Dispatch an error action with the error as the payload

Middleware has the following signature:

```js
const middleware = store => next => action => {

};
```

## Test

Create an `src/middleware/promise.test.js` file and put your tests inside.

* test your middleware
  * create a mock reducer with `const reducer = jest.fn()`
  * create a store using the mock reducer
    `const store = createStore(reducer, applyMiddleware(promiseMiddleware))`
  * Test successful promise (use `Promise.resolve` as payload)
    * `LOAD_START` action is sent
    * `LOAD_END` action is sent
    * `PROMISE_ACTION` action is sent
  * Test unsuccessful promise (use `Promise.reject` as payload)
    * `LOAD_END` action is sent
    * `ERROR` action is sent

## Rubric

isPromise function: 1 point
LOAD_START dispatched: 1 point
LOAD_END dispatched:  1 point
ERROR dispatched: 1 point
promise payload dispatched: 1 point

Test LOAD_STATE: 1 point
Test LOAD_END: 1 point
Test ERROR: 1 point
Test promise payload: 1 point
Test payload isn't a promise: 1 point
