import { useState } from "react";
import { Button } from "@chakra-ui/react/";
import { Box, Input, Text } from "@chakra-ui/react/";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
  };
  const textSpace = "2px";
  const inputSpace = "22px";
  return (
    <Box
      bg="purple.800"
      py="100px"
      px="40px"
      boxShadow="2xl"
      as="form"
      onSubmit={handleSubmit}
    >
      <Text fontSize="18px" color="white" mb={textSpace}>
        Email
      </Text>
      <Input
        bg="purple.400"
        outline="none"
        border="none"
        color="white"
        _focus={{ boxShadow: "none" }}
        mb={inputSpace}
        rounded="none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Text fontSize="18px" color="white" mb={textSpace}>
        Password
      </Text>
      <Input
        bg="purple.400"
        outline="none"
        border="none"
        color="white"
        _focus={{ boxShadow: "none" }}
        type="password"
        mb={inputSpace}
        rounded="none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Input>

      <Button
        px={"15px"}
        color="white"
        letterSpacing="1px"
        background="#603bbb"
        width="100%"
        rounded="none"
        type="submit"
      >
        Sign In
      </Button>
    </Box>
  );
}

export default Login;
