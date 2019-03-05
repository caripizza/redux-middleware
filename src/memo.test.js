import { defaultEquality } from './memo';

describe('defaultEquality', () => {
  it('can tell if arguments are the same', () => {
    const prevArgs = [1, 2, 3];
    const nextArgs = [1, 2, 3];
    expect(defaultEquality(prevArgs, nextArgs)).toEqual(true);
  });

  it('can tell if arguments are different', () => {
    const prevArgs = [1, 2];
    const nextArgs = [1, NaN];
    expect(defaultEquality(prevArgs, nextArgs)).toEqual(false);
  });

  it('can tell if arguments are different length', () => {
    const prevArgs = [1, 2];
    const nextArgs = [NaN, 2, 3];
    expect(defaultEquality(prevArgs, nextArgs)).toEqual(false);
  });
});
