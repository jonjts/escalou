import { Player } from "./Player";
import { Pot } from "./Pot";
import { Team } from "./Team";

export class GroupDraw {
  private MAX_LETTERS = 26;
  private MAX_POTS = this.MAX_LETTERS * 2;
  private _pots: Map<string, Pot>;

  constructor() {
    this._pots = new Map<string, Pot>();
  }

  makeDraw(teamCount: number): Team[] {
    this.updatePotsScore();

    this.playersScoreAverage(teamCount);
    const teams: Team[] = Array.from(
      { length: teamCount },
      (_, i) => new Team(`Team ${i + 1}`, [])
    );

    const players = Array.from(this._pots.values()).flatMap(
      (pot) => pot.players
    );
    players.sort((a, b) => b.score - a.score); // Ordena os jogadores pelo score de forma decrescente

    for (const player of players) {
      let teamWithLowestScore = teams[0];

      for (const team of teams) {
        if (
          team.players.reduce((acc, p) => acc + p.score, 0) <
          teamWithLowestScore.players.reduce((acc, p) => acc + p.score, 0)
        ) {
          teamWithLowestScore = team;
        }
      }

      teamWithLowestScore.players.push(player);
    }

    return teams;
  }

  addPlayesToPot(potName: string, players: Player[]) {
    const pot = this._pots.get(potName);
    if (!pot) {
      throw new Error("Pot not found");
    }
    pot.players = players;
  }

  addPot() {
    if (!this.canAddPot()) {
      throw new Error("Can't add more pots");
    }
    const potName = this.createPotName();
    const pot = new Pot(0, potName, []);
    this._pots.set(potName, pot);
    return pot;
  }

  removePot(potName: string) {
    this._pots.delete(potName);
  }

  canAddPot() {
    return this._pots.size < this.MAX_POTS;
  }

  private playersScoreAverage(teamCount: number) {
    const playersScoreSum = Array.from(this._pots.values()).reduce(
      (acc, pot) => acc + pot.playersCount * pot.score,
      0
    );
    return playersScoreSum / teamCount;
  }

  private updatePotsScore() {
    const keys = Array.from(this._pots.keys()).reverse();
    keys.forEach((key, index) => {
      const pot = this._pots.get(key);
      if (pot) {
        pot.score = index + 1;
      }
    });
  }

  private createPotName(): string {
    if (this._pots.size === 0) {
      return this.getUppercaseLetter(1);
    }
    const lastPotName = Array.from(this._pots.keys()).pop() ?? "";
    const hasMoreThenOneLetter = lastPotName.length > 1;

    const latter = lastPotName.charAt(0);
    const latterPosition = this.getLetterPosition(latter);

    if (hasMoreThenOneLetter) {
      const numbers = Number(lastPotName.substring(1));
      return this.getNextLetter(latterPosition, numbers);
    }
    return this.getNextLetter(latterPosition);
  }

  private getNextLetter(latterPosition: number, numbers?: number): string {
    if (latterPosition < this.MAX_LETTERS) {
      return numbers !== undefined
        ? `${this.getUppercaseLetter(latterPosition + 1)}${numbers}`
        : this.getUppercaseLetter(latterPosition + 1);
    }
    return numbers !== undefined
      ? `${this.getUppercaseLetter(1)}${numbers + 1}`
      : `${this.getUppercaseLetter(1)}${1}`;
  }

  private getUppercaseLetter(position: number) {
    return String.fromCharCode(65 + position - 1);
  }

  private getLetterPosition(letter: string) {
    return letter.charCodeAt(0) - 65 + 1;
  }
}
