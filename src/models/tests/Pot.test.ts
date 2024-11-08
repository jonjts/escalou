import { Player } from "../Player";
import { Pot } from "../Pot";

describe("Pot", () => {
  it("create a pot", () => {
    const pot = Pot.create("A", []);
    expect(pot.name).toBe("A");
    expect(pot.score).toBe(0);
    expect(pot.playersCount).toBe(0);
  });

  it("set score", () => {
    const pot = Pot.create("A", [new Player("P")]);
    pot.score = 1;
    expect(pot.score).toBe(1);
    expect(pot.players[0].score).toBe(1);
  });
});
