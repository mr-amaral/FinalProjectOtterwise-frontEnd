import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth-context"
import { useForm } from "react-hook-form"
import {
  bgDesktop,
  bgLogin,
  logo,
  logoWhite,
  paw,
  symbol,
} from "../../assets/images"
import { Link as RRLink } from "react-router-dom"

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
  Image,
  Wrap,
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useState } from "react"

function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [offView, setOffView] = useState(false)
  const [type, setType] = useState("password")
  const navigate = useNavigate()
  const location = useLocation()
  const { signin } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const from = location.state?.from?.pathname || "/"

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      const { email, password } = data
      const lowerCaseEmail = email.toLowerCase().trim()
      const response = await signin({ email: lowerCaseEmail, password })
      await signin(response)
      setIsLoading(false)
      navigate(from, { replace: true })
    } catch (error) {}
  }
  const handleClick = () => {
    setOffView(!offView)
    if (type === "password") {
      setType("text")
    } else {
      setType("password")
    }
  }

  return (
    <>
      <Flex
        flexDirection={["column", "row"]}
        w={["auto", "auto", "100%"]}
        h={["auto", "100vh", "100vh"]}
      >
        <Flex
          flexDirection={["column"]}
          width={["auto", "60%"]}
          backgroundImage={[bgLogin, bgDesktop]}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
          justifyContent={["flex-start", "center"]}
          alignItems={["flex-start", "center"]}
          gap="10px"
        >
          <Box display={["block", "none"]} p="32px" mt="13.95px">
            <Image w="52.78" h="53.55px" src={paw} />
          </Box>
          <Box display={["none", "block"]}>
            <Image src={logoWhite} />
          </Box>
          <Box display={["block", "none"]} padding="0px 32px 24.88px 26px">
            <Text
              fontSize="36px"
              fontWeight="bold"
              lineHeight="49.03px"
              color="#fff"
            >
              {" "}
              Comece agora. Conecte-se já.
            </Text>
          </Box>
        </Flex>
        <Container
          w={["auto", "70%", "100%"]}
          p={["32px", "50px"]}
          margin={["auto", "auto", "auto", "auto"]}
          mt={["auto", "4px"]}
        >
          <Flex gap="30px" mb="50px" flexDirection="column">
            <Box display={["none", "block"]}>
              <Image src={symbol} />
            </Box>
            <Box w="264px" h="98px" display={["none", "block"]}>
              <Text
                fontSize="36px"
                fontWeight="700"
                lineHeight="49.03px"
                color="cyan.400"
              >
                Comece agora. Conecte-se já.
              </Text>
            </Box>
            <Heading
              fontSize={["24px"]}
              fontWeight={["600"]}
              lineHeight={["40px"]}
            >
              Login
            </Heading>
            <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
              <Flex flexDirection="column" gap="30px" mb="40px">
                <Box>
                  <FormLabel
                    fontWeight={["600"]}
                    fontSize={["14px"]}
                    lineHeight={["16px"]}
                    htmlFor="email"
                  >
                    E-mail
                  </FormLabel>
                  <Input
                    fontWeight={["400"]}
                    fontSize={["16px"]}
                    lineHeight={["24px"]}
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
                      fontWeight={["400"]}
                      fontSize={["16px"]}
                      lineHeight={["24px"]}
                      {...register(type, {
                        required: true,
                      })}
                      placeholder="Senha"
                      type={type}
                    />
                    <InputRightElement>
                      <IconButton
                        bg="inherit"
                        icon={offView ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={() => handleClick()}
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
              <Button
                isLoading={isLoading}
                _hover={{ bg: "cyan.800" }}
                fontSize={["14px"]}
                fontWeight={["600"]}
                lineHeight={["24px"]}
                color="#fff"
                bgColor="cyan.400"
                type="submit"
              >
                Entrar
              </Button>
            </Stack>
            <Wrap flexDirection={["column", "row"]}>
              <Text fontSize={["16px"]} lineHeight={["24px"]}>
                Ainda não possui uma conta?
              </Text>
              <Link
                color="cyan"
                as={RRLink}
                to="/signup"
                textDecoration="underline"
              >
                Cadastrar-se
              </Link>
            </Wrap>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Image display={["flex", "none"]} src={logo} />
          </Flex>
        </Container>
      </Flex>
    </>
  )
}

export default Login
