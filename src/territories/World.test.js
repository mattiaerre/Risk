const continents = require('../data/continents.json');
const World = require('./World');

test('World', () => {
  const world = new World(continents);

  // number of continents
  expect(world.continents.length).toBe(1); // eventually 6 in total

  // number of territories
  expect(
    world.continents.reduce(
      (accumulator, current) => accumulator + current.territories.length,
      0
    )
  ).toBe(4); // eventually 72 in total
});
