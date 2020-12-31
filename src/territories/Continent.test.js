const Continent = require('./Continent');

test('Australia', () => {
  // eslint-disable-next-line global-require
  const territories = require('../data/australia.json');

  const australia = new Continent({ id: 'australia', name: 'Australia' });

  expect(australia).toMatchSnapshot();

  australia.makeTerritories(territories);

  expect(australia.territories.length).toBe(4);

  expect(
    australia.territories.map((territory) => territory.name)
  ).toMatchSnapshot();
});

test('North America', () => {
  // eslint-disable-next-line global-require
  const territories = require('../data/north-america.json');

  const northAmerica = new Continent({
    id: 'north-america',
    name: 'North America'
  });

  expect(northAmerica).toMatchSnapshot();

  northAmerica.makeTerritories(territories);

  expect(northAmerica.territories.length).toBe(9);

  expect(
    northAmerica.territories.map((territory) => territory.name)
  ).toMatchSnapshot();

  const westernUnitedStates = northAmerica.territories.find(
    (territory) => territory.id === 'western-united-states'
  );

  expect(westernUnitedStates.bordersWith('eastern-united-states')).toBe(true);

  const alaska = northAmerica.territories.find(
    (territory) => territory.id === 'alaska'
  );

  // INFO: this invalidates my design so far :(
  expect(alaska.bordersWith('kamchatka')).toBe(true);
});
