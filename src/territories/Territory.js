class Territory {
  constructor({ id, name }) {
    this.borders = [];
    this.id = id;
    this.name = name;
  }

  bordersWith(id) {
    return this.borders.find((territory) => territory.id === id) !== undefined;
  }

  setBorders(borders) {
    this.borders = borders;
  }
}

module.exports = Territory;
