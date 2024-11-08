import { screen } from "@testing-library/react";
import { PotsPanel } from "../PotsPanel";
import { GroupDrawProvider } from "@/app/contexts/GroupDrawContext";
import { renderWithProviders } from "@/app/tests/helper";
import userEvent from "@testing-library/user-event";

jest.mock("@/models/GroupDraw", () => {
  return {
    GroupDraw: {
      create: jest.fn().mockReturnValue({
        addPot: jest.fn().mockReturnValue({ name: "Pot 1", players: [] }),
        addPlayesToPot: jest.fn(),
        removePot: jest.fn(),
        pots: [],
      }),
    },
  };
});

describe("PotsPanel", () => {
  it("add a pot", () => {
    renderWithProviders(<PotsPanel />, { wrapper: GroupDrawProvider });

    userEvent.click(screen.getByText("Pots"));

    const addPotButton = screen.getByRole("button");
    expect(addPotButton).toBeInTheDocument();
    addPotButton.click();
  });
});
