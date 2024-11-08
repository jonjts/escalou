import { BaseModel } from "./BaseModel";
import { Player } from "./Player";

export class Team extends BaseModel {
  static create(name: string, players: Player[]) {
    return new Team(name, players);
  }
  
  constructor(public name: string, public players: Player[]) {
    super();
  }

  get score() {
    return this.players.reduce((acc, player) => acc + player.score, 0);
  }
}
