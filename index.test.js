const { Pokemon, Attack } = require("./index.js");

describe("Pokemon class", () => {
  it("is a function", () => {
    expect(typeof Pokemon).toBe("function");
  });

  it("creates instances of the Pokemon class", () => {
    const foo = new Pokemon("foo");
    expect(foo).toBeInstanceOf(Pokemon);
  });

  const NAME = "charmander";
  const HEALTH = 100;
  const TYPE = [];
  const ATTACKS = [];

  const charmander = new Pokemon(NAME, HEALTH, TYPE, ATTACKS);

  for (let property of ["name", "health", "type", "attacks"]) {
    it(`has a ${property} property`, () => {
      expect(charmander[property]).toBeDefined();
    });
  }
});
