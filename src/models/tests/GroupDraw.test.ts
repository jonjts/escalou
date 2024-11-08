import { GroupDraw } from "../GroupDraw";
import { Player } from "../Player";

describe("GroupDraw", () => {
  let groupDraw: GroupDraw;

  beforeEach(() => {
    groupDraw = GroupDraw.create();
  });

  describe("addPot", () => {
    it("add a new pot", () => {
      const pot = groupDraw.addPot();
      expect(pot.name).toBe("A");
    });

    it("add many pots", () => {
      let pot = groupDraw.addPot();
      expect(pot.name).toBe("A");
      for (let i = 0; i < 26; i++) {
        pot = groupDraw.addPot();
      }
      expect(pot.name).toBe("A1");
      for (let i = 0; i < 25; i++) {
        pot = groupDraw.addPot();
      }
      expect(pot.name).toBe("Z1");
    });
  });

  it("add players on pot", () => {
    const potA = groupDraw.addPot();
    const playersA = Player.fromTextList(["A1", "A2"]);
    groupDraw.addPlayesToPot(potA.name, playersA);

    const potB = groupDraw.addPot();
    const playersB = Player.fromTextList(["B1", "B2"]);
    groupDraw.addPlayesToPot(potB.name, playersB);

    expect(potA.players).toEqual(playersA);
    expect(potB.players).toEqual(playersB);
  });

  describe("makeDraw", () => {
    it("make draw with equality players", () => {
      const potA = groupDraw.addPot();
      const playersA = Player.fromTextList(["A1", "A2"]);
      groupDraw.addPlayesToPot(potA.name, playersA);

      const potB = groupDraw.addPot();
      const playersB = Player.fromTextList(["B1", "B2"]);
      groupDraw.addPlayesToPot(potB.name, playersB);

      const teams = groupDraw.makeDraw(2);
      expect(teams[0].players).toEqual([playersA[0], playersB[0]]);
      expect(teams[1].players).toEqual([playersA[1], playersB[1]]);
    });

    it("make draw with not equality list players", () => {
      const potA = groupDraw.addPot();
      const playersA = Player.fromTextList(["A1", "A2"]);
      groupDraw.addPlayesToPot(potA.name, playersA);

      const potB = groupDraw.addPot();
      const playersB = Player.fromTextList(["B1", "B2", "B3"]);
      groupDraw.addPlayesToPot(potB.name, playersB);

      const teams = groupDraw.makeDraw(2);

      expect(teams[0].players).toEqual([playersA[0], playersB[0], playersB[2]]);
      expect(teams[1].players).toEqual([playersA[1], playersB[1]]);
    });
  });
});
