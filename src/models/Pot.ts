import { BaseModel } from "./BaseModel";
import { Player } from "./Player";

export class Pot extends BaseModel {
  private _score: number;
  private _name: string;
  private _players: Player[];

  static create(name: string, players: Player[]) {
    return new Pot(0, name, players);
  }

  constructor(score: number, name: string, players: Player[]) {
    super();
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
