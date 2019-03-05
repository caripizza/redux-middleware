export function defaultEquality(prevArgs, nextArgs) {
  // return true if prevArgs & nextArgs are the same
  return prevArgs.length === nextArgs.length
    && prevArgs.every((arg, idx) => arg === nextArgs[idx]);
}

export function memoize(fn, equalityFn = defaultEquality) {
  let lastArgs = null;
  let lastResult = null;

  return function() {
    const currentArgs = [...arguments];
    if(lastArgs && equalityFn(lastArgs, currentArgs)) {
      return lastResult;
    }

    lastArgs = currentArgs;
    lastResult = fn(...currentArgs);

    return lastResult;
  };
}
