export class Player {
  public score = 0;
  constructor(public name: string) {}

  static fromTextList(textList: string[]): Player[] {
    return textList.map((text) => new Player(text));
  }
}
