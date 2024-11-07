import { Team } from "../Team";

describe("Team", () => {
  it("create a team", () => {
    const team = new Team("A", []);
    expect(team.name).toBe("A");
    expect(team.score).toBe(0);
  });

  it("create a team with players", () => {
    const team = new Team("A", [{ name: "A", score: 10 }]);
    expect(team.name).toBe("A");
    expect(team.score).toBe(10);
  });
});
