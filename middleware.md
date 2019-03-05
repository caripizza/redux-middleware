# Redux Middleware

## Readings

* [Middleware](https://redux.js.org/advanced/middleware)

## About

Redux middleware takes the following form:

```js
const myMiddleware = store => next => action {

}
```

Here `store` is the redux store with all the methods we're familiar with:

* `store.getState()`
* `store.dispatch(action)`
* `store.subscribe(listener)`

Like express, `next` is our way to continue. In the case of redux, `next` is
a dispatch function that allows the action to continue through the rest of
the middleware before reaching the reducers.

Finally, `action` is an action that's been dispatched.

## Logging middleware

* Create middleware that `console.log`s every action
* If the action results in a state change `console.log` the updated state
* write the logging middleware in `src/middleware/logger.js`

## Thunk middleware

* write thunk middleware in `src/middleware/thunk.js`

### Test

* test your middleware
  * create a mock reducer with `const reducer = jest.fn()`
  * create a store using the mock reducer
    `const store = createStore(reducer, applyMiddleware(thunkMiddleware))`
  * Dispatch a function:
    ```
      const actionFn = jest.fn();
      store.dispatch(actionFn);
    ```
    * test that `actionFn` receives `dispatch` and `getState`

### Middleware

* Check if the action is a function
  * use `typeof` to check the actions type
* if the payload is not a function return `next(action)`
* if the payload is a function invoke the function passing
  in the `dispatch` and `getState` functions.
