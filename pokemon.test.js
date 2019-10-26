const { Pokemon } = require("./index.js");

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
  const TYPES = ["fire"];
  const ATTACKS = [{}];

  const charmander = new Pokemon(NAME, HEALTH, TYPES, ATTACKS);

  // Properties
  for (let property of ["name", "health", "type", "attacks"]) {
    it(`has a ${property} property`, () => {
      expect(charmander[property]).toBeDefined();
    });
  }

  // Health
  it('must take an integer for health', () => {
    expect(() => { new Pokemon(NAME, "i am a health bar", TYPES, ATTACKS)}).toThrow();
    expect(() => { new Pokemon(NAME, 0.5, TYPES, ATTACKS)}).toThrow();
  })

  it('must throw if health is not at least 1', () => {
    expect(() => { new Pokemon(NAME, 0, TYPES, ATTACKS)}).toThrow();
    expect(() => { new Pokemon(NAME, -9000, TYPES, ATTACKS)}).toThrow();
  })

  // Types
  it('must throw if no type is specified', () => {
    expect(() => { new Pokemon(NAME, HEALTH, [], ATTACKS)}).toThrow();
  });
  
  // Attacks
  it('must throw if no attacks are specified', () => {
    expect(() => { new Pokemon(NAME, HEALTH, TYPES, [])}).toThrow();
  });
});
