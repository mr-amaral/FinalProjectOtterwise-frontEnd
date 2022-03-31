import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth-context"
import { useForm } from "react-hook-form"
import { bgLogin, logo, paw } from "../../assets/images"
import { Link as RRLink } from "react-router-dom"
import Header from "../../components/Header"
import Logo from "../../components/Logo"
import {
  Link,
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react"
import { ViewIcon } from "@chakra-ui/icons"

function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signin } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const from = location.state?.from?.pathname || "/protected"

  const onSubmit = async (data) => {
    try {
      await signin(data)
      navigate(from, { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Flex flexDirection={["column", "row"]}>
        <Header
          bgLogin={bgLogin}
          paw={paw}
          Children="Comece agora. Conecte-se já."
        />

        <Container p="32px">
          <Flex gap="30px" flexDirection="column">
            <Heading>Login</Heading>
            <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
              <Flex flexDirection="column" gap="30px" mb="40px">
                <Box>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input
                    {...register("email", {
                      required: true,
                    })}
                    placeholder="E-mail"
                  />
                  {errors.email && (
                    <Text color="red.500">{errors.email.message}</Text>
                  )}
                </Box>
                <Box>
                  <FormLabel htmlFor="password">Senha</FormLabel>
                  <InputGroup>
                    <Input
                      {...register("password", {
                        required: true,
                      })}
                      placeholder="Senha"
                      type="password"
                    />
                    <InputRightElement>
                      <IconButton
                        bg="inherit"
                        icon={<ViewIcon />}
                        onClick={() => console.log("ClIK")}
                      />
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && (
                    <Text display="block" color="red.500" fontSize="12px">
                      {errors.password.message}
                    </Text>
                  )}
                </Box>
              </Flex>
              <Button type="submit">Entrar</Button>
            </Stack>
            <Flex flexDirection="column">
              <Text>Ainda não possui uma conta?</Text>
              <Link as={RRLink} to="/signup" textDecoration="underline">
                Cadastrar-se
              </Link>
            </Flex>
          </Flex>
        </Container>
        <Logo logo={logo} />
      </Flex>
    </>
  )
}

export default Login