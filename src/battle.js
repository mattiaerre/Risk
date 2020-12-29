const Roll = require('roll');

const roll = new Roll();

function descending(a, b) {
  return b - a;
}

function battle({ attacker, defender }) {
  // TODO: validate the input

  const attackerDice = roll.roll(`${attacker}d6`).rolled; // e.g., [ 4, 5, 3 ]
  const defenderDice = roll.roll(`${defender}d6`).rolled; // e.g., [ 2, 3 ]

  const attackerDiceSorted = [...attackerDice].sort(descending); // e.g., [ 5, 4, 3 ]
  const defenderDiceSorted = [...defenderDice].sort(descending); // e.g., [ 3, 2 ]

  return defenderDiceSorted.reduce(
    (accumulator, current, index) => {
      // for when attacker is 1 and defender is 2
      if (attackerDiceSorted[index]) {
        if (current >= attackerDiceSorted[index]) {
          // defender wins
          accumulator.attacker.lost += 1;
        } else {
          // attacker wins
          accumulator.defender.lost += 1;
        }
      }
      return accumulator;
    },
    {
      attacker: { dice: attackerDice, lost: 0 },
      defender: { dice: defenderDice, lost: 0 }
    }
  );
}

module.exports = battle;
