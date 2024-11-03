import { Heading, IconButton, Textarea } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

import { useMembersManager } from "./useMembersManager";
import { useTranslations } from "next-intl";

interface PotProps {
  name: string;
  onClose(): void;
  initialMembers?: string[];
  onMembersChange(members: string[]): void;
}

export const Pot = ({
  name,
  onClose,
  onMembersChange,
  initialMembers,
}: PotProps) => {
  const t = useTranslations("Pot.female");
  const { addBulkMembers, membersGrouped } = useMembersManager({
    onMembersChange,
    initialMembers,
  });
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-between items-center p-4 bg-white/20 rounded-t-3xl">
        <Heading size={"md"}>{name}</Heading>
        <IconButton
          aria-label="Delete pot"
          variant={"outline"}
          onClick={onClose}
        >
          <MdClose />
        </IconButton>
      </div>
      <div className="flex flex-col border border-gray-700 border-t-transparent rounded-3xl rounded-t-none">
        <Textarea
          className="border border-gray-700 border-t-transparent rounded-3xl rounded-t-none p-2"
          placeholder={t("textAreaPlaceholder")}
          onChange={(e) => addBulkMembers(e.target.value)}
          value={membersGrouped}
        />
      </div>
    </div>
  );
};
