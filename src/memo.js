export function defaultEquality(prevArgs, nextArgs) {
  // return true if prevArgs & nextArgs are the same
  return prevArgs.length === nextArgs.length
    && prevArgs.every((arg, idx) => arg === nextArgs[idx]);
}
