import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react/";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  const { SignOut } = useAuth();
  return (
    <>
      <Flex
        bg="purple.500"
        h="10vh"
        px="40px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h3" color="white">
          Vaccination
        </Heading>
        <InputGroup width='50%'>
          <InputLeftElement children={<AiOutlineSearch />} color='white' />
          <Input
            border="none"
            outline="none"
            bg="purple.300"
            placeholder="..."
            _focus={{boxShadow: 'none'}}
            color='white'
          />
        </InputGroup>
        <Box>
          <Button
            rounded="none"
            bg="purple.900"
            color="white"
            onClick={() => {
              SignOut();
            }}
            letterSpacing="1px"
          >
            Log Out
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default Navbar;
