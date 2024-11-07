import { Player } from "../Player";
import { Pot } from "../Pot";

describe("Pot", () => {
  it("create a pot", () => {
    const pot = new Pot(0, "A", []);
    expect(pot.name).toBe("A");
    expect(pot.score).toBe(0);
    expect(pot.playersCount).toBe(0);
  });

  it("set score", () => {
    const pot = new Pot(0, "A", [new Player("P")]);
    pot.score = 1;
    expect(pot.score).toBe(1);
    expect(pot.players[0].score).toBe(1);
  });
});
