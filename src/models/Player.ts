import { BaseModel } from "./BaseModel";

export class Player extends BaseModel {
  public score = 0;

  static create(name: string) {
    return new Player(name);
  }

  constructor(public name: string) {
    super();
  }

  static fromTextList(textList: string[]): Player[] {
    return textList.map((text) => new Player(text));
  }
}
