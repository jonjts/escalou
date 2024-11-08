import { Pot } from "../Pot";

export const GroupDraw = {
  create: jest.fn().mockReturnValue({
    addPot: jest.fn().mockReturnValue(Pot.create("A", [])),
    addPlayesToPot: jest.fn(),
    removePot: jest.fn(),
    pots: [],
  }),
};
