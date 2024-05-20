import React, { useState } from "react";
import CustomDropDown from "components/custom-dropdown/custom-drop-down";

import {
  Text,
  flexbox,
  Box,
  Flex,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";

const Faqs = () => {
  const faqData = [
    {
      title: "What is your return policy?",
      description:
        "We accept returns within 14 days of purchase. The product must be in its original condition.",
    },
    {
      title: "How do I track my order?",
      description:
        "Once your order has been shipped, we will send you an email with tracking information.",
    },
    {
      title: "Do you ship internationally?",
      description:
        "Yes, we ship to most countries worldwide. Shipping fees may apply.",
    },
    {
      title: "How can I contact customer service?",
      description:
        "You can reach out to our customer service team via email at support@example.com.",
    },
    {
      title: "What payment methods do you accept?",
      description:
        "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      title: "How do I update my account information?",
      description:
        'You can update your account information by logging into your account and clicking on "Account Settings".',
    },
  ];
  return (
    <div style={{ marginTop: "50px" , marginBottom: "20px"}}>
      <Text
        textAlign="center"
        color="#DDFF00" // Change color to #DDFF00
        fontFamily={["sans-serif", null, "sans-serif"]}
        fontStyle={["light", null, "light"]}
        fontSize={["md", null, "1.0rem"]}
        // textTransform={["uppercase", null, "lowercase"]}
        _dark={{ color: "#DDFF00" }}
        _light={{
          color: "#7A852E",
          fontWeight: "400",
        }}
      >
        FaQs
      </Text>
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
        {" "}
        We&apos;ve got the answers
      </Text>
      <div>
        {faqData.map((item, index) => (
          <CustomDropDown
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
