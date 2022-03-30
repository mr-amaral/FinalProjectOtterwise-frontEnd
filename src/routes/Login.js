import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth-context"
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

import { bgLogin, logo, paw } from "../assets/images"

function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signin } = useAuth()

  const from = location.state?.from?.pathname || "/"

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")

    await signin({ email, password })
    navigate(from, { replace: true })
  }

  return (
    <>
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
              <Input name="email" type="email" placeholder="E-mail" />
            </Box>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel htmlFor="password">Senha</FormLabel>
                <InputGroup>
                  <Input name="password" type="password" placeholder="Senha" />
                  <InputRightElement>
                    <IconButton
                      bg="inherit"
                      icon={<ViewIcon />}
                      onClick={() => console.log("ClIK")}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </form>
            <Button type="submit" mt="8px">
              Entrar
            </Button>
            <Flex flexDirection="column">
              <Text>Ainda não possui uma conta?</Text>
              <Link
                onClick={() => navigate("/signup")}
                textDecoration="underline"
              >
                Cadastrar-se
              </Link>
            </Flex>
          </Flex>
        </Container>
        <Flex mt="15px" mb="15px" justifyContent="center">
          <Image src={logo} />
        </Flex>
      </Flex>
    </>
  )
}

export default Login
