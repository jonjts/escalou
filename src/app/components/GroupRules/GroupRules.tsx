"use client";

import { useTranslations } from "next-intl";
import { Heading, NumberInput, Field } from "@chakra-ui/react";

import CollapsiblePanel from "../CollapsiblePanel";
import { useGroupDrawContext } from "@/app/contexts/GroupDrawContext";
import { useCallback } from "react";

const DEFAULT_TEAM_COUNT = 1;

export const GroupRules = () => {
  const t = useTranslations("GroupRules.female");
  const { setTeamCount, teamCount } = useGroupDrawContext();

  const handleAddTeamCount = useCallback(
    (value: string) => {
      const count = parseInt(value);
      setTeamCount(isNaN(count) ? DEFAULT_TEAM_COUNT : count);
    },
    [setTeamCount]
  );

  return (
    <CollapsiblePanel
      header={
        <Heading size={"lg"} fontWeight={"bold"}>
          {t("title")}
        </Heading>
      }
    >
      <Field.Root>
        <Field.Label>{t("teamCount")}</Field.Label>
        <NumberInput.Root
          min={DEFAULT_TEAM_COUNT}
          value={`${teamCount}`}
          onValueChange={({ value }) => handleAddTeamCount(value)}
        >
          <NumberInput.Input
            aria-label="team count"
            placeholder={t("teamCountPlaceholder")}
          />
        </NumberInput.Root>
      </Field.Root>
    </CollapsiblePanel>
  );
};
