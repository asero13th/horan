import {
  Card,
  Image,
  CardHeader,
  CardBody,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const HowDoesItWork = ({ title, image, description }) => {
  return (
    <Card style={{ margin: 15 }}>
      <Image
        src={image}
        width="60px"
        height="60px"
        alt="image about top notch solution"
        style={{ margin: 10 }}
      />
      <CardHeader>
        <Heading
          as="h3"
          size="md"
          fontFamily={["Poppins", null, "Poppins"]}
          fontStyle={["bold", null, "bold"]}
          color="gray.300"
        >
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text
          as="div"
          textStyle="subtitle"
          align="center"
          textAlign="start"
          color="gray.800"
          fontFamily={["Poppins", null, "Poppins"]}
          fontStyle={["light", null, "light"]}
          width={["100%", null, "100%"]}
          fontSize={["md", null, "lg"]}
          _dark={{ color: "gray.500" }}
        >
          {description}
        </Text>
      </CardBody>
    </Card>
    
  );
};

export default HowDoesItWork;
