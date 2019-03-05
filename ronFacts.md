# Ron Swanson Facts

Create an application that makes asynchronous API calls to display
Ron Swanson facts.

## Redux setup

* create `src/reducers/ron.js`
* create `src/reducers/index.js`
  * use `combineReducer`
* create `src/store.js`
```js
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import { middleware } from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);
```

## Fetch Ron Swanson facts

Use the http://ron-swanson-quotes.herokuapp.com/v2/quotes API

* create `src/services/ronApi.js`
  * create a `getFacts` function that takes a number of facts to fetch
  * http://ron-swanson-quotes.herokuapp.com/v2/quotes/100
* create `src/action/ron.js`
  * create a `fetchFacts` actionCreator
  * use the thunk middleware to fetch from the ronApi
  * the actionCreator is a function that takes the number of quotes to fetch
    and returns a function that takes `dispatch`. Once the fetch is complete
    `dispatch` an action
```js
const fetchFacts = count => dispatch => {
  // fetch from API
  // .then dispatch an action where the payload is the result of the fetch
  // actions are objects with { type, payload }
  //
}
```
* update the `src/reducers/ron.js` reducer to handle your action

## Display Facts

* create a `src/components/facts/Facts.js`
  * display a list of facts
* create a `src/containers/facts/AllFacts.js`
  * create a class `AllFacts` that takes `facts` and `fetch` props
  * on `componentDidMount` call the `fetch` function
  * `render` the `Facts` component
  * connect `AllFacts` to redux
    * mapStateToProps passes facts
      * create a `src/selectors/ron.js` with a `getFacts` selector
    * mapDispatchToProps passes fetch
      * fetch dispatches the `fetchFacts` action
* Add `AllFacts` to your `App.js` file

## Refactor

* Show a loading screen while waiting
  * add loading to your redux state
* Create a `withFetch` higher order component
