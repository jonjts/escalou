import React, { useEffect } from "react";
import { Collapsible, IconButton } from "@chakra-ui/react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

interface CollapsiblePanelProps {
  children: React.ReactNode;
  header: React.ReactNode;
  disabled?: boolean;
}

export const CollapsiblePanel = ({
  children,
  header,
  disabled = false,
}: CollapsiblePanelProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
    }
  }, [disabled]);

  return (
    <Collapsible.Root
      open={isOpen}
      className="p-6 border border-gray-700 rounded-lg"
    >
      <div
        className={`flex flex-row gap-4 justify-between items-center cursor-pointer ${
          disabled ? "text-gray-500" : ""
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span>{header}</span>
        <IconButton>
          {isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
        </IconButton>
      </div>
      <Collapsible.Content className="pt-10">{children}</Collapsible.Content>
    </Collapsible.Root>
  );
};
