import { HStack, Image, Text, Button } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { useColorMode } from "@/components/ui/color-mode";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Image src={logo}></Image>
      <Text>NavBar</Text>

      <Button size="sm" variant="subtle" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </HStack>
  );
};

export default NavBar;
