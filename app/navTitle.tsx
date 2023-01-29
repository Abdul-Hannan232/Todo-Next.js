"use-client";

import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const NavTitle = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md" color={"teal"}>
          Chakra Todo App
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">
          <a href="https://github.com/Abdul-Hannan232/Todo-Next.js.git">Code</a>
        </Button>
        <Button colorScheme="teal">
          <a href="https://github.com/Abdul-Hannan232">Github</a>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default NavTitle;
