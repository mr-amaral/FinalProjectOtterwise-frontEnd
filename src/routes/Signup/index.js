import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Link as RRLink, useNavigate } from "react-router-dom"
import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react"
import React from "react"
import {
  logo,
  bgLogin,
  paw,
  symbol,
  logoWhite,
  bgDesktop,
} from "../../assets/images"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAuth } from "../../context/auth-context"

const Signup = () => {
  const [offView, setOffView] = React.useState(false)
  const [type, setType] = React.useState("password")
  const { signin } = useAuth()
  const navigate = useNavigate()
  let schema = yup.object().shape({
    name: yup
      .string("Campo precisa ser um texto")
      .required("Campo obrigatório"),
    email: yup
      .string("Campo precisa ser um texto")
      .required("Campo obrigatório")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "Email inválido"
      ),
    password: yup
      .string("Campo precisa ser um texto")
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
      ),
    username: yup
      .string("Campo precisa ser um texto")
      .required("Campo obrigatório"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      await signin(data)
      navigate("/login", { replace: true })
    } catch (error) {
      console.log(error)
    }
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
          width={["auto", "50%"]}
          backgroundImage={[bgLogin, bgDesktop]}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
          gap="10px"
          justifyContent={["flex-start", "center"]}
          alignItems={["flex-start", "center"]}
        >
          <Box display={["none", "block"]}>
            <Image src={logoWhite} />
          </Box>
          <Box display={["block", "none"]} p="32px" mt="13.95px">
            <Image w="52.78" h="53.55px" src={paw} />
          </Box>
        </Flex>
        <Container
          mt={["auto", "11px"]}
          margin={["auto", "auto", "auto", "auto"]}
          p={["32px", "40px"]}
          w={["auto", "60%", "100%"]}
        >
          <Flex flexDirection="column">
            <Box display={["none", "block"]} mb={"32px"}>
              <Image src={symbol} />
            </Box>

            <Heading
              fontSize={["24px"]}
              fontWeight={["600"]}
              lineHeight={["40px"]}
              mb="32px"
            >
              Cadastro
            </Heading>
            <Stack as="form" onSubmit={() => handleSubmit(onSubmit)}>
              <Flex
                justifyContent={["center"]}
                flexDirection="column"
                gap={["16px", "24px"]}
                mb="40px"
              >
                <Box>
                  <FormLabel
                    fontSize={["14px"]}
                    fontWeight={["600"]}
                    lineHeight={["16px"]}
                    htmlFor="name"
                  >
                    Nome
                  </FormLabel>
                  <Input {...register("name")} placeholder="Nome" />
                </Box>
                <Box>
                  <FormLabel
                    fontSize={["14px"]}
                    fontWeight={["600"]}
                    lineHeight={["16px"]}
                    htmlFor="email"
                  >
                    E-mail
                  </FormLabel>
                  <Input {...register("email")} placeholder="E-mail" />
                </Box>
                <Box>
                  <FormLabel
                    fontSize={["14px"]}
                    fontWeight={["600"]}
                    lineHeight={["16px"]}
                    htmlFor="nameUser"
                  >
                    Nome de usuário
                  </FormLabel>
                  <Input
                    {...register("username")}
                    placeholder="Ex.: @billbulldog"
                  />
                </Box>
                <Box>
                  <FormLabel
                    fontSize={["14px"]}
                    fontWeight={["600"]}
                    lineHeight={["16px"]}
                    htmlFor="password"
                  >
                    Senha
                  </FormLabel>
                  <InputGroup>
                    <Input
                      {...register("password")}
                      placeholder="Senha"
                      type={type}
                    />
                    <InputRightElement>
                      <IconButton
                        bg="inherit"
                        icon={offView ? <ViewIcon /> : <ViewOffIcon />}
                        onClick={() => handleClick()}
                      />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Flex>
              <Button colorScheme="cyan" color="#fff" type="submit">
                Entrar
              </Button>
            </Stack>
            <Wrap mt="16px" mb="36px" flexDirection={["column", "row"]}>
              <Text>Já possui cadastro?</Text>
              <Link
                color="cyan"
                as={RRLink}
                to="/login"
                textDecoration="underline"
              >
                Faça login
              </Link>
            </Wrap>

            <Flex alignItems="center" justifyContent="center">
              <Image display={["flex", "none"]} src={logo} />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  )
}

export default Signup
