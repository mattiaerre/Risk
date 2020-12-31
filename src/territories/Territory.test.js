const australia = require('../data/australia.json');
const Territory = require('./Territory');

test('Eastern Australia', () => {
  const easternAustralia = new Territory(australia[0]);

  expect(easternAustralia).toMatchSnapshot();

  const newGuinea = new Territory(australia[2]);

  easternAustralia.setBorders([newGuinea]);

  expect(easternAustralia.bordersWith('indonesia')).toBe(false);

  expect(easternAustralia.bordersWith('new-guinea')).toBe(true);
});
