"use client";

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
import Section from "components/marketing/section-wrapper";
import { SEO } from "components/seo/seo";
import type { NextPage } from "next";

import { HeroSection } from "pages/Herosection/Page";
import { FeaturedProjects } from "pages/FeaturedProjects/Page";
import { BoilerplateCode } from "pages/BoilerPlateCode/Page";
import { IntroducingFreelance } from "./IntroducingFreelance/Page";
import { PartnersSection } from "pages/PartnersSection/Page";
import { Benefits } from "./Benefits/Page";
import { Attributes } from "./Attributes/Page";
import { Attribute2 } from "./Attributes2/Page"; // Add this line
import { Tags } from "./Tags/Page";
import { HowItWorks } from "./HowItWorks/Page";
import { Suspense } from "react";
import Reviews from "./Reviews/page";
import Faqs from "./Faqs/page";
import { Footer } from "components/layout/footer";
import UpperFotter from "./Footer/page";
import { Testimonial } from "components/testimonials";
import { CustomerStory } from "./customerStory/page";
const Home: NextPage = () => {
  return (
    <Box
      _dark={{ bg: "#0d0d0d" }}
      _light={{
        bgGradient: "linear(to-b, #ffffff, #B4B4B4CD )",
      }}
    >
      <SEO
        title="Saas UI Landingspage"
        description="Free SaaS landingspage starter kit"
      />
      <Box>
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />

          <FeaturedProjects />

          <PartnersSection />

          <BoilerplateCode />

          <IntroducingFreelance />

          <Benefits />

          <Attributes />

           {/* <Attribute2 /> */}

          <Tags />

          <HowItWorks />
          <CustomerStory/>
          <Reviews />
          
          <Faqs />
          <UpperFotter />
          <Footer />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Home;
