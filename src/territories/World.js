const Continent = require('./Continent');

function makeContinents(data) {
  const continents = [];

  data.forEach((element) => {
    const continent = new Continent(element);
    // eslint-disable-next-line global-require, import/no-dynamic-require
    continent.makeTerritories(require(`../data/${element.id}.json`));
    continents.push(continent);
  });

  return continents;
}

class World {
  constructor(data) {
    this.continents = makeContinents(data);
  }
}

module.exports = World;
