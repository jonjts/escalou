import { renderHook, act } from "@testing-library/react";
import { GroupDrawProvider, useGroupDrawContext } from "../GroupDrawContext";
import { Player } from "@/models/Player";
import { Pot } from "@/models/Pot";

const mockAddPot = jest.fn().mockReturnValue(Pot.create("A", []));
const mockAddPlayesToPot = jest.fn();
const mockRemovePot = jest.fn();

jest.mock("@/models/GroupDraw", () => {
  return {
    GroupDraw: {
      create: jest.fn().mockImplementation(() => ({
        addPot: mockAddPot,
        addPlayesToPot: mockAddPlayesToPot,
        removePot: mockRemovePot,
        pots: [],
      })),
    },
  };
});

describe("GroupDrawProvider", () => {
  it("add players to a pot", () => {
    const { result } = renderHook(() => useGroupDrawContext(), {
      wrapper: GroupDrawProvider,
    });

    const players = [new Player("Player 1"), new Player("Player 2")];

    act(() => {
      result.current.addPlayersToPot("A", players);
    });

    expect(mockAddPlayesToPot).toHaveBeenCalledWith("A", players);
  });

  it("should delete a pot", () => {
    const { result } = renderHook(() => useGroupDrawContext(), {
      wrapper: GroupDrawProvider,
    });

    act(() => {
      result.current.deletePot("A");
    });

    expect(mockRemovePot).toHaveBeenCalledWith("A");
  });
});
