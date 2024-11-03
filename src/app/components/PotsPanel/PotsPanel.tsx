import { useTranslations } from "next-intl";
import { Heading } from "@chakra-ui/react";
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
      <div>
        <Pot name={"A"} onClose={() => {}} onMembersChange={() => {}} />
      </div>
    </CollapsiblePanel>
  );
};
