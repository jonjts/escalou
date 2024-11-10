"use client";
import { createContext, ReactNode, useState, useContext } from "react";

import { GroupDraw } from "@/models/GroupDraw";
import { Player } from "@/models/Player";
import { Pot } from "@/models/Pot";

interface GroupDrawContextData {
  addNewPot(): void;
  addPlayersToPot(potName: string, players: Player[]): void;
  deletePot(potName: string): void;
  pots: Pot[];
  setTeamCount(teamCount: number): void;
  teamCount: number;
}

interface GroupDrawProviderProps {
  children: ReactNode;
}

const GroupDrawContext = createContext<GroupDrawContextData>({
  addNewPot: () => {
    throw new Error("GroupDrawContext not initialized");
  },
  addPlayersToPot: () => {
    throw new Error("GroupDrawContext not initialized");
  },
  deletePot: () => {
    throw new Error("GroupDrawContext not initialized");
  },
  pots: [],
  teamCount: 0,
  setTeamCount: () => {
    throw new Error("GroupDrawContext not initialized");
  },
});

export const GroupDrawProvider = ({ children }: GroupDrawProviderProps) => {
  const [groupDraw] = useState(GroupDraw.create());
  const [teamCount, setTeamCount] = useState(1);
  const [pots, setPots] = useState(groupDraw.pots);

  const addNewPot = () => {
    groupDraw.addPot();
    setPots([...groupDraw.pots]);
  };

  const addPlayersToPot = (potName: string, players: Player[]) => {
    groupDraw.addPlayesToPot(potName, players);
    setPots([...groupDraw.pots]);
  };

  const deletePot = (potName: string) => {
    groupDraw.removePot(potName);
    setPots([...groupDraw.pots]);
  };

  return (
    <GroupDrawContext.Provider
      value={{
        addNewPot,
        addPlayersToPot,
        deletePot,
        pots,
        setTeamCount,
        teamCount,
      }}
    >
      {children}
    </GroupDrawContext.Provider>
  );
};

export const useGroupDrawContext = () => {
  const context = useContext(GroupDrawContext);
  if (!context) {
    throw new Error("useGroupDraw must be used within a GroupDrawProvider");
  }
  return context;
};
