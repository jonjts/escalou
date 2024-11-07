import { useTranslations } from "next-intl";
import { Heading, Button } from "@chakra-ui/react";

import CollapsiblePanel from "../CollapsiblePanel";
import { Pot } from "../Pot/Pot";

export const PotsPanel = () => {
  const t = useTranslations("PotsPanel.female");
  return (
    <CollapsiblePanel
      header={
        <Heading size={"lg"} fontWeight={"bold"}>
          {t("title")}
        </Heading>
      }
    >
      <div className="flex flex-col gap-2 ">
        <Button className="bg-white text-black" size={"sm"} variant={"solid"}>
          {t("addPot")}
        </Button>
        <Pot name={"A"} onClose={() => {}} onMembersChange={() => {}} />
      </div>
    </CollapsiblePanel>
  );
};
