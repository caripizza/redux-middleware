# Clone React Memo

Create a clone of the `React.memo` function. It should take a
component and memoize the result. If the same props are passed
to the component it should returned a cached result instead
of re-rendering the component.

## Process

Try writing the reactMemoize function first in an existing application.
For example, use the `Func` component used in class today and put the
reactMemoize function below the component. Play around with memoization
there. Once you're comfortable use that code as the basis for this lab.

```js
import React from 'react';

export default reactMemoize(function Func({ title }) {
  console.log('Func', 'Component rendered');
  return (
    <h1>Func - {title}</h1>
  );
});

function reactMemoize(Component) {
  // Do memoization stuff here
  return MemoizedComponent() {
  }
}

function reactPropsEquality(prevProps, newProps) {
  // Check equality here!
}
```

## memoize `memoize(fn: function, equality: boolean) -> function`

* Create a `memoize` function
  * `memoize` takes two arguments
    1. a function to memoize
    1. a function to compare equality
  * `memoize` returns a function

## Equality functions `areEqual(itemA: Any, itemB: Any) -> Boolean`

* Create a `defaultEquality` function
  * `defaultEquality` should check arguments using `===`
  * It should take two arguments (the items it is checking for equality)
* Create a `reactPropsEquality` function
  * `reactPropsEquality` should understand that the arguments
    being passed in are from react
  * React passes in props as the first argument
  * Check the length of the `prevProps` and `newProps`
  * Check that each prop from `prevProps` is equal to `newProps`
    using `===`
    * NOTE: use `Object.keys` to iterate through all props
* Equality functions return true if the items are equal
* Equality functions return false if the items are not equal

## reactMemoize `reactMemoize(Component: React.Component) -> Component`

* Create and export a `reactMemoize` function
  * `reactMemoize` should take one argument
    1. a functional component

## Tests

* Write a test for the `memoize` function.
  * Hint: use `jest.fn()` to see how many times your function is called
* Write a test for each equality function
  * Check that items that should be equal returns true
  * Check that items that should be unequal returns false
* Write a test for the `reactMemoize` function
  * Hint: this test is almost exactly like the `memoize` test.
    A functional react component is just a function. The major
    difference is the argument you'll pass.

## BONUS

Using the same `memoize` function above to create a selector
memoize function.

### memoize

* Use the same memoize function from above

### Equality functions

* Use the `defaultEquality` function from above

### selectorMemoize `selectorMemoize(selectors: []function) -> function`

* Create and export a `selectorMemoize` function
  * `selectorMemoize` takes an array of function
    * the final selector in the list is the selector to memoize
    * the result of the other selectors will be passed to the final
      selector as arguments

For example:

```js
const state = {
  pizza: ['cheese', 'pepperoni'],
  searchTerm: 'cheese'
};

selectorMemoize(
  state => state.pizza,
  state => state.searchTerm,
  (pizza, searchTerm) => pizza.filter(p => p === searchTerm)
);
```

## Rubric

* `memoize` function and tests 4 points
* `reactMemoize` function and tests 2 points
* `defaultEquality` function and tests 1 points
* `reactPropsEquality` function and tests 3 points
