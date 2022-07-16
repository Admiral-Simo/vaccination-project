import styles from "../styles/Home.module.css";
import { Login, Navbar, Vaccination } from "../components";
import { Box, Flex } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useEffect } from "react";

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="purple.900"
        h="90vh"
      >
        <Vaccination />
      </Flex>
    </>
  );
}
