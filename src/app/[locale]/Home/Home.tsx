"use client";

import PotsPanel from "@/app/components/PotsPanel";
import { GroupDrawProvider } from "@/app/contexts/GroupDrawContext";

export const Home = () => {
  return (
    <GroupDrawProvider>
      <PotsPanel />
    </GroupDrawProvider>
  );
};
