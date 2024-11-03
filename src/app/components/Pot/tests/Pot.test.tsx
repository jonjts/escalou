import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Pot } from "../Pot";
import { renderWithProviders } from "@/app/tests/helper";

const props = {
  name: "A",
  onClose: jest.fn(),
  onMembersChange: jest.fn(),
};

describe("Pot", () => {
  it("render pot name", () => {
    renderWithProviders(<Pot {...props} />);
    expect(screen.getByText(props.name)).toBeInTheDocument();
  });

  it("close pot", () => {
    renderWithProviders(<Pot {...props} />);
    screen.getByRole("button").click();
    expect(props.onClose).toHaveBeenCalled();
  });

  it("fill textarea with initial members", () => {
    const initialMembers = ["Laura", "Fernanda", "Maria"];
    renderWithProviders(<Pot {...props} initialMembers={initialMembers} />);

    expect(screen.getByRole("textbox")).toHaveValue(initialMembers.join(", "));
  });

  it("fire change members", async () => {
    const textMembers = "Laura, Fernanda, Maria";
    renderWithProviders(<Pot {...props} />);
    userEvent.type(screen.getByRole("textbox"), textMembers);

    await waitFor(() => {
      expect(props.onMembersChange).toHaveBeenCalledWith(
        textMembers.split(", ")
      );
    });
  });

  it("fire change member with a correct list", async () => {
    const textMembers = "Laura, Fernanda, Maria.Fernanda. Clara, Bruna";
    renderWithProviders(<Pot {...props} />);
    userEvent.type(screen.getByRole("textbox"), textMembers);

    await waitFor(() => {
      expect(props.onMembersChange).toHaveBeenCalledWith(
        textMembers.split(", ")
      );
    });
  });
});
