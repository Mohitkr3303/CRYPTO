import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      w={"fit-content"}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      display={"flex"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      icon={<SwitchIcon />}
      {...props}
      zIndex={10}
    />
  );
};

export default ColorModeSwitcher;
