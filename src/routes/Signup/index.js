import { ViewIcon } from "@chakra-ui/icons"
import { Link as RRLink } from "react-router-dom"
import {
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
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { logo, bgLogin, paw } from "../../assets/images"
import Header from "../../components/Header"
import Logo from "../../components/Logo"
const Signup = () => {
  return (
    <>
      <Flex flexDirection={["column", "row"]}>
        <Header bgLogin={bgLogin} paw={paw} />
        <Container p="32px">
          <Flex gap="30px" flexDirection="column">
            <Heading>Cadastro</Heading>
            <Stack as="form">
              <Flex flexDirection="column" gap="30px" mb="40px">
                <Box>
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <Input placeholder="Nome" />
                </Box>
                <Box>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input placeholder="E-mail" />
                </Box>
                <Box>
                  <FormLabel htmlFor="nameUser">Nome de usuário</FormLabel>
                  <Input placeholder="Ex.: @billbulldog" />
                </Box>
                <Box>
                  <FormLabel htmlFor="password">Senha</FormLabel>
                  <InputGroup>
                    <Input placeholder="Senha" type="password" />
                    <InputRightElement>
                      <IconButton
                        bg="inherit"
                        icon={<ViewIcon />}
                        onClick={() => console.log("ClIK")}
                      />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Flex>
              <Button type="submit">Entrar</Button>
            </Stack>
            <Flex flexDirection="column">
              <Text>Já possui cadastro?</Text>
              <Link as={RRLink} to="/login" textDecoration="underline">
                Faça login
              </Link>
            </Flex>
            <Logo logo={logo} />
          </Flex>
        </Container>
      </Flex>
    </>
  )
}

export default Signup
