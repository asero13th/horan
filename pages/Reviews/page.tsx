import { Center, Flex, Icon, Image, Text, Box } from "@chakra-ui/react";
import { Br } from "@saas-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import PartenerCompany from "components/reviews/PartenerCompany";
const Reviews = () => {
  const data = [
    {
      image: "/static/images/partner_1.webp",
      description:
        "Creative, innovative and strategic, we have \n great achievements made together and looking \n to more",
      owner_name: "Galchu Boru",
      company_name: "Manager, Halchiasa Trading",
    },
    {
      image: "/static/images/partner_4.webp",
      description:
        "Incredible group of people and talented professionals. \n we are very happy with the results and looking \n forward to more projects",
      owner_name: "Beimnet Mehari",
      company_name: "Founder, Read Sea",
    },
    {
      image: "/static/images/partner_3.webp",
      description:
        "These group are geninly amazing, they \n have helped us grow our business and we are \n very happy with the results",
      owner_name: "Dirctor General",
      company_name: "Global Peace Federation",
    },
  ];

  return (
    <Flex justify="center" direction="column">
      <Flex
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
        }}
        direction={{ base: "column", md: "row" }}
        gap={4}
      >
        {data.map((item, index) => (
          <PartenerCompany
            key={index}
            image={item.image}
            description={item.description}
            owner_name={item.owner_name}
            company_name={item.company_name}
          />
        ))}
      </Flex>
      <Flex justify="center" style={{ marginTop: "50px" }}>
        <hr style={{ width: "50%" }} />
      </Flex>
      <Flex
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "100px",
        }}
        direction={{ base: "column", md: "row" }}
        gap={50}
      >
        <Box>
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
          >
            250+ <Br />
          </Text>
          <Text
            as="h2"
            textStyle="h2"
            align="center"
            textAlign="center"
            fontFamily={["Poppins", null, "Poppins"]}
            fontStyle={["extrabold", null, "extrabold"]}
            _dark={{ bgGradient: "linear(to-b, #ffffff, #999999CD )" }}
            _light={{ bgGradient: "linear(to-b, #000000, #999999CD )" }}
            bgClip="text" 
          >
            happy customers
          </Text>
        </Box>
        <Box>
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
          >
            5K+ <Br />
          </Text>
          <Text
            as="h2"
            textStyle="h2"
            align="center"
            textAlign="center"
            fontFamily={["Poppins", null, "Poppins"]}
            fontStyle={["extrabold", null, "extrabold"]}
            _dark={{ bgGradient: "linear(to-b, #ffffff, #999999CD )" }}
            _light={{ bgGradient: "linear(to-b, #000000, #999999CD )" }}
            bgClip="text"
          >
            hours spent on craft
          </Text>
        </Box>
        <Box>
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
          >
            4.8 <Br />
          </Text>
          <Text
            as="h2"
            textStyle="h2"
            align="center"
            textAlign="center"
            fontFamily={["Poppins", null, "Poppins"]}
            fontStyle={["extrabold", null, "extrabold"]}
            _dark={{ bgGradient: "linear(to-b, #ffffff, #999999CD )" }}
            _light={{ bgGradient: "linear(to-b, #000000, #999999CD )" }}
            bgClip="text"
          >
            review rate
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Reviews;
