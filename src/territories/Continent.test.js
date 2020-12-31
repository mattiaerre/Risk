const territories = require('../data/australia.json');
const Continent = require('./Continent');

test('Australia', () => {
  const australia = new Continent({ id: 'australia', name: 'Australia' });

  expect(australia).toMatchSnapshot();

  australia.makeTerritories(territories);

  expect(australia.territories.length).toBe(4);

  expect(
    australia.territories.map((territory) => territory.name)
  ).toMatchSnapshot();
});
