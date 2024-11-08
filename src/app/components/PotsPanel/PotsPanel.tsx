"use client";

import { useTranslations } from "next-intl";
import { Heading, Button } from "@chakra-ui/react";

import CollapsiblePanel from "../CollapsiblePanel";
import { Pot } from "../Pot/Pot";
import { useGroupDrawContext } from "@/app/contexts/GroupDrawContext";
import { Player } from "@/models/Player";

export const PotsPanel = () => {
  const t = useTranslations("PotsPanel.female");
  const { addNewPot, pots, deletePot, addPlayersToPot } = useGroupDrawContext();

  return (
    <CollapsiblePanel
      header={
        <Heading size={"lg"} fontWeight={"bold"}>
          {t("title")}
        </Heading>
      }
    >
      <div className="flex flex-col gap-2 ">
        <Button
          onClick={addNewPot}
          className="bg-white text-black"
          size={"sm"}
          variant={"solid"}
          aria-label={"Add Pot"}
        >
          {t("addPot")}
        </Button>
        {pots.map((pot) => (
          <Pot
            key={pot.name}
            name={pot.name}
            onClose={() => deletePot(pot.name)}
            onMembersChange={(members) =>
              addPlayersToPot(pot.name, Player.fromTextList(members))
            }
          />
        ))}
      </div>
    </CollapsiblePanel>
  );
};
