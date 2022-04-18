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
  useToast,
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
import { signup } from "../../services/auth"

const Signup = () => {
  const [offView, setOffView] = React.useState(false)
  const [type, setType] = React.useState("password")

  const navigate = useNavigate()
  const toast = useToast()
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
        /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
        "Deve conter no mínimo um número e uma letra maiúscula"
      ),
    username: yup
      .string("Campo precisa ser um texto")
      .required("Campo obrigatório"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    try {
      await signup(data)
      navigate("/login")
      toast({
        title: "Sucesso",
        description: "Cadastro realizado com sucesso",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      if (error.response.status === 400) {
        toast({
          title: "Conta não foi criada.",
          description: error.response.data,
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      }
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
            <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
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
                  <Input {...register("name")} type="text" placeholder="Nome" />
                  <Text
                    fontWeight={["400"]}
                    lineHeight={["16px"]}
                    fontSize={["10px", "12px"]}
                  >
                    {errors.name && errors.name.message}
                  </Text>
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
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="E-mail"
                  />
                  <Text
                    fontWeight={["400"]}
                    lineHeight={["16px"]}
                    fontSize={["10px", "12px"]}
                  >
                    {errors.email && errors.email.message}
                  </Text>
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
                    type="text"
                    {...register("username")}
                    placeholder="Ex.: @billbulldog"
                  />
                  <Text
                    fontWeight={["400"]}
                    lineHeight={["16px"]}
                    fontSize={["10px", "12px"]}
                  >
                    {errors.username && errors.username.message}
                  </Text>
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
                        icon={offView ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={() => handleClick()}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <Text
                    mt={["4px"]}
                    fontWeight={["400"]}
                    lineHeight={["16px", "16px"]}
                    fontSize={["10px", "12px"]}
                  >
                    {" "}
                    Deve conter no mínimo um número e uma letra maiúscula
                  </Text>
                </Box>
              </Flex>
              <Button
                isLoading={isSubmitting}
                colorScheme="cyan"
                color="#fff"
                type="submit"
              >
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
