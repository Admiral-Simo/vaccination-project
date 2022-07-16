import styles from "../styles/Home.module.css";
import { Highlight, Heading, Flex, Box } from "@chakra-ui/react/";
import { Login } from "../components";

export default function Home() {
  return (
    <>
      <Flex
        h="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Login />
      </Flex>
    </>
  );
}
