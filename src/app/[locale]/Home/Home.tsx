"use client";

import GroupRules from "@/app/components/GroupRules/GroupRules";
import PotsPanel from "@/app/components/PotsPanel";
import { GroupDrawProvider } from "@/app/contexts/GroupDrawContext";

export const Home = () => {
  return (
    <GroupDrawProvider>
      <div className="flex flex-col gap-2">
        <PotsPanel />
        <GroupRules />
      </div>
    </GroupDrawProvider>
  );
};
