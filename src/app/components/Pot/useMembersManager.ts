import { useState } from "react";

interface UseMembersManagerParams {
  initialMembers?: string[];
  onMembersChange(members: string[]): void;
}

const TOKEN_SEPARATOR = ",";

export const useMembersManager = ({
  onMembersChange,
  initialMembers,
}: UseMembersManagerParams) => {
  const [members, setMembers] = useState(initialMembers ?? []);

  const addBulkMembers = (members: string) => {
    const newMembers = members.split(TOKEN_SEPARATOR).map((member) => member);
    onMembersChange(newMembers.map((member) => member.trim()));
    setMembers(newMembers);
  };

  return {
    membersGrouped: members.join(TOKEN_SEPARATOR),
    addBulkMembers,
  };
};
