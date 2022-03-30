import {
  Flex,
  Text,
  Button,
  Image,
  Heading,
  FormLabel,
  Input,
  Link,
  Box,
  Container,
  InputGroup,
  InputRightElement,
  IconButton,
  FormControl,
} from "@chakra-ui/react"
import { ViewIcon } from "@chakra-ui/icons"

import { bgLogin, logo, paw } from "../../assets/images/index.js"

const Login = ({
  cadNavigate,
  viewPassword,
  loginSubmit,
  type,
  nameEmail,
  namePassword,
}) => {
  return (
    <Flex flexDirection={["column", "row"]}>
      <Flex
        flexDirection={["column", "row"]}
        backgroundImage={bgLogin}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        gap="10px"
      >
        <Box p="32px" mt="13.95px">
          <Image w="52.78" h="53.55px" src={paw} />
        </Box>
        <Box padding="0px 32px 24.88px 26px">
          <Text
            fontSize="36px"
            fontWeight="bold"
            lineHeight="49.03px"
            color="#fff"
          >
            Comece agora. Conecte-se já.
          </Text>
        </Box>
      </Flex>
      <Container p="32px">
        <Flex gap="30px" flexDirection="column">
          <Heading>Login</Heading>
          <Box>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input name={nameEmail} type="email" placeholder="E-mail" />
          </Box>
          <form onSubmit={loginSubmit}>
            <FormControl>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <InputGroup>
                <Input
                  name={namePassword}
                  type="password"
                  placeholder="Senha"
                />
                <InputRightElement>
                  <IconButton
                    bg="inherit"
                    icon={<ViewIcon />}
                    onClick={viewPassword}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </form>
          <Button type={type} mt="8px">
            Entrar
          </Button>
          <Flex flexDirection="column">
            <Text>Ainda não possui uma conta?</Text>
            <Link to={cadNavigate} textDecoration="underline">
              Cadastrar-se
            </Link>
          </Flex>
        </Flex>
      </Container>
      <Flex mt="15px" mb="15px" justifyContent="center">
        <Image src={logo} />
      </Flex>
    </Flex>
  )
}

export default Login
