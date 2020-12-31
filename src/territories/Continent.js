const Territory = require('./Territory');

class Continent {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
    this.territories = [];
  }

  // INFO: this method could be moved out from this class
  makeTerritories(data) {
    // create all the territories
    const territories = data.map((territory) => new Territory(territory));
    // for each territory set its borders
    data.forEach(({ id, borders }) => {
      territories
        .find((territory) => territory.id === id)
        .setBorders(
          territories.filter((territory) => borders.includes(territory.id))
        );
    });
    this.territories = territories;
  }
}

module.exports = Continent;
