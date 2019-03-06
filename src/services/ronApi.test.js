const { getFacts } = require('./ronApi');

jest.mock('./ronApi');

describe('ronApi service', () => {
  it('gets a list of facts', () => {
    return getFacts()
      .then(facts => {
        expect(facts).toEqual(['this is a fact']);
      });
  });
});
