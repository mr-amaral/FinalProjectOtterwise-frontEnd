import { Box, Flex, Icon, Link } from "@chakra-ui/react"
import { Link as RRLink, useMatch, useResolvedPath } from "react-router-dom"

const DrawerLink = ({ children, icon, to, onClick, ...props }) => {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Box
      onClick={onClick}
      color={match ? "#00ACC1" : "#424242"}
      borderLeft={match ? "3px solid #00ACC1" : "none"}
      backgroundColor={match ? "#e5f7f9" : "transparent"}
      mb={"5px"}
      display="flex"
      cursor={"pointer"}
      h={["30px", "48px"]}
    >
      <Link
        fontWeight={["600", "700"]}
        fontSize={["16px"]}
        lineHeight={["24px"]}
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
        _focus={{ textDecoration: "none" }}
        p="4px"
        textAlign="center"
        alignSelf={"center"}
        backgroundColor={match ? "#e5f7f9" : "transparent"}
        as={RRLink}
        w="100%"
        color={match ? "#00ACC1" : "#424242"}
        to={to}
        {...props}
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Icon w={["24px"]} alignSelf={"center"} mr="10px">
            {icon}
          </Icon>
          {children}
        </Flex>
      </Link>
    </Box>
  )
}

export default DrawerLink
