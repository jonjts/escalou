import { Player } from "./Player";

export class Team {
  constructor(public name: string, public players: Player[]) {}

  get score() {
    return this.players.reduce((acc, player) => acc + player.score, 0);
  }
}
