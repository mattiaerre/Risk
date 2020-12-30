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
      attackerDiceNumber: 3,
      defenderDiceNumber: 2,
      possibleResults: defendingWithTwo
    },
    {
      attackerDiceNumber: 3,
      defenderDiceNumber: 1,
      possibleResults: defendingWithOne
    },
    {
      attackerDiceNumber: 2,
      defenderDiceNumber: 2,
      possibleResults: defendingWithTwo
    },
    {
      attackerDiceNumber: 2,
      defenderDiceNumber: 1,
      possibleResults: defendingWithOne
    },
    {
      attackerDiceNumber: 1,
      defenderDiceNumber: 2,
      possibleResults: defendingWithOne
    },
    {
      attackerDiceNumber: 1,
      defenderDiceNumber: 1,
      possibleResults: defendingWithOne
    }
  ];

  scenarios.forEach(
    ({ attackerDiceNumber, defenderDiceNumber, possibleResults }) => {
      it(`attacker dice number ${attackerDiceNumber}, defender dice number ${defenderDiceNumber}`, () => {
        const result = battle({ attackerDiceNumber, defenderDiceNumber });

        expect(
          possibleResults
            .map(JSON.stringify)
            .includes(
              JSON.stringify([result.attacker.lost, result.defender.lost])
            )
        ).toBe(true);
      });
    }
  );
});
