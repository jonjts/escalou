import { Player } from "./Player";

export class Pot {
  private _score: number;
  private _name: string;
  private _players: Player[];

  constructor(score: number, name: string, players: Player[]) {
    this._score = score;
    this._name = name;
    this._players = players;
  }

  get playersCount() {
    return this.players.length;
  }

  set score(score: number) {
    this._score = score;
    this.players.forEach((player) => (player.score = score));
  }

  get score() {
    return this._score;
  }

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set players(players: Player[]) {
    this._players = players;
  }

  get players() {
    return this._players;
  }
}
