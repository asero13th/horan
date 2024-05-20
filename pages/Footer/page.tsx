import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { Br } from "@saas-ui/react";
import { FocusableElement } from "@saas-ui/react-utils";
import { ButtonLink } from "components/button-link/button-link";
import { Card, CardBody, CardHeader, CardFooter } from "@chakra-ui/react";
import { FallInPlace } from "components/motion/fall-in-place";
const UpperFotter = () => {
  return (
    <Container maxW="container.lg" style={{ marginTop: 100 }} mb={10}>
      <Text
        as="h1"
        textStyle="h1"
        align="center"
        textAlign="center"
        fontFamily={["Poppins", null, "Poppins"]}
        fontStyle={["extrabold", null, "extrabold"]}
        _dark={{ bgGradient: "linear(to-b, #ffffff, #999999CD )" }}
        _light={{ bgGradient: "linear(to-b, #000000, #999999CD )" }}
        bgClip="text"
        mb={5}
      >
        Ready to elevate your <Br /> technology game?
      </Text>

      <Text
        as="div"
        textStyle="subtitle"
        align="center"
        textAlign="center"
        color="gray.800"
        fontFamily={["Poppins", null, "Poppins"]}
        fontStyle={["light", null, "light"]}
        width={["80%", null, "80%"]}
        fontSize={["md", null, "lg"]}
        _dark={{ color: "gray.500" }}
        margin="auto"
      >
        Get ready to start your journey with us. We are here to help you. <Br />
        Efficient technological solutions without frustration.
        <Br /> Contact us today!
      </Text>
      <Box width={["80%", null, "70%"]} margin="auto">
        <FallInPlace delay={0.3} pt="10" pl="20" pr="20">
          <InputGroup>
            <Input
              variant="outline"
              borderRadius="full"
              borderWidth="1px"
              borderColor="gray.200"
              px="10"
              py="7"
              placeholder="name@email.com"
              _placeholder={{ color: "gray.300" }}
            />
            <InputRightElement>
              <ButtonLink
                pr="4"
                pl="4"
                mr="24"
                mt="5"
                borderRadius="full"
                colorScheme="#DDFF00"
                background={"#DDFF00"}
                boxShadow={"0 4px 14px 0 rgba(0,0,0,0.39)"}
                dropShadow={"0 4px 14px 0 rgba(0,0,0,0.39)"}
                color={"#000000"}
                fontStyle={"light"}
                size="md"
                href={"/signup"}
              >
                Get Notified
              </ButtonLink>
            </InputRightElement>
          </InputGroup>
        </FallInPlace>
      </Box>
    </Container>
  );
};

export default UpperFotter;
