import { Player } from "../Player";

describe("Player", () => {
  it("create a player", () => {
    const player = Player.create("A");
    expect(player.name).toBe("A");
    expect(player.score).toBe(0);
  });

  it("create players from text list", () => {
    const players = Player.fromTextList(["A", "B"]);
    expect(players[0].name).toBe("A");
    expect(players[1].name).toBe("B");
  });
});
