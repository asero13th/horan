"use client"

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
    useDisclosure
  } from "@chakra-ui/react";
  import Section from 'components/marketing/section-wrapper';
  import { SEO } from "components/seo/seo";
  import type { NextPage } from "next";
  import Image from "next/image";
  import * as React from "react";
  
  import { Br } from "@saas-ui/react";
  import { Hero } from "components/hero";
  import { FallInPlace } from "components/motion/fall-in-place";
  
  import { FocusableElement } from '@saas-ui/react-utils';
  import { ButtonLink } from "components/button-link/button-link";
  import { motion, useScroll, useTransform } from "framer-motion";
  import dynamic from 'next/dynamic';
  import Marquee from "react-marquee-slider";
  import styles from '../PartnersSection.module.css';
  const CodePanel = dynamic(() => import('components/code-panel/code-panel'))
  const ComponentShowcase = dynamic(() =>
    import('components/component-showcase').then((mod) => mod.ComponentShowcase)
  )

  export const Benefits = () => {
    return (
      <div className={styles.container}>
        <Text
          textAlign="center"
          mb="2"
          color="#DDFF00" // Change color to #DDFF00
          fontFamily={['Poppins', null, 'Poppins']}
          fontStyle={['medium', null, 'medium']}
          fontSize={['md', null, '1.0rem']}
          textTransform={['uppercase', null, 'uppercase']}
          _dark={{ color: "#DDFF00" }}
          _light={{ 
            color: "#7A852E",
            fontWeight: "400"
          }}
        >
          What you will get
        </Text>
  
        {/* Description */}
        <div className={styles.description}>
          <p>
            We resolve problems associated with creative procedures
          </p>
          <br /> <br /> <br /> 
        </div>
        </div>
    );
  };