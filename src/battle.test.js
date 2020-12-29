const battle = require('./battle');

describe('battle', () => {
  const defendingWithOne = [
    [0, 1],
    [1, 0]
  ];

  const defendingWithTwo = [
    [0, 2],
    [1, 1],
    [2, 0]
  ];

  const scenarios = [
    {
      attacker: 3,
      defender: 2,
      possibleResults: defendingWithTwo
    },
    {
      attacker: 3,
      defender: 1,
      possibleResults: defendingWithOne
    },
    {
      attacker: 2,
      defender: 2,
      possibleResults: defendingWithTwo
    },
    {
      attacker: 2,
      defender: 1,
      possibleResults: defendingWithOne
    },
    {
      attacker: 1,
      defender: 2,
      possibleResults: defendingWithOne
    },
    {
      attacker: 1,
      defender: 1,
      possibleResults: defendingWithOne
    }
  ];

  scenarios.forEach(({ attacker, defender, possibleResults }) => {
    it(`attacker ${attacker}, defender ${defender}`, () => {
      const result = battle({ attacker, defender });

      expect(
        possibleResults
          .map(JSON.stringify)
          .includes(
            JSON.stringify([result.attacker.lost, result.defender.lost])
          )
      ).toBe(true);
    });
  });
});
