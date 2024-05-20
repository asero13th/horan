
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
    flexbox,
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
  import styles from './PartnersSection.module.css';
  const CodePanel = dynamic(() => import('components/code-panel/code-panel'))
  const ComponentShowcase = dynamic(() =>
    import('components/component-showcase').then((mod) => mod.ComponentShowcase)
  )


  
const ImageBox = ({ isMobile, video, opacity, translateY, children }) => (
  <motion.div
    className="video"
    ref={video}
    style={{
      translateY,
    }}
  >
    <Box
      position="relative"
      borderRadius="30px"
      overflow="hidden"
      border={isMobile ? "1px solid #DDFF00" : "1px"}
      background={isMobile ? "#DDFF00" : ""}
      height={isMobile ? "120px" : "370px"}
      width={isMobile ? "100%" : "500px"}
      margin={isMobile ? "8px 5px" : "10px 50px"}
      display="flex"
      flex-direction="column"
      justify-content="flex-end"
      align-items="flex-start"
      align-content="flex-start"
      flex-wrap="nowrap"
      transform-perspective="1200"
     
   
     
        >
      {children}
    </Box>
  </motion.div>
);

export const CustomerStory = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const video = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: video,
      offset: ["start end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  
  
    // const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(
      scrollYProgress,
      [0, 0.6, 0.8, 0.9],
      [1, 0.8, 0.8, 0]
    );
  
    // const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const translateY = useTransform(
      scrollYProgress,
      [0, 1],
      [0, -150]
    );
  
    const plateHeight = 200; // Adjust this value based on your design
  
    const flipTransform = useTransform(
      scrollYProgress,
      [0, 1], // Range of scrollYProgress
      [1, 0.5] // Range of scaleY
    );
  
    const translateYTransform = useTransform(
      scrollYProgress,
      [0, 1], // Range of scrollYProgress
      [0, plateHeight / 2] // Range of translateY
    );

    const boxes = [
      {
        image: "",
        alt: "Image 1",
        priority: true,
      },
      {
        image: "/static/images/customer_story.jpg",
        alt: "Image 2",
        priority: true,
      },
    
      
    ];
    
    return (
      <Flex   justifyContent="center" alignItems="center" flexWrap="wrap" mt={100} px={20}    direction={{ base: "column", md: "row" }} border="none">
          <ImageBox  isMobile={isMobile} video={video} opacity={opacity} translateY={translateY} >
            
              <Image
                  src="/static/images/custmor_story.jpg"
                  alt="Mella website"
                  width= {1}
                  height =  {1}
                  />
           
              <Box margin={isMobile ? "2px 2px" :"50px 10px"} >  
               <Text
                    textAlign="center"
                    mb="2"
                    color="#DDFF00" // Change color to #DDFF00
                    fontFamily={['sans-serif', null, 'sans-serif']}
                    fontStyle={['medium', null, 'medium']}
                    fontSize={['md', null, '1.0rem']}
                    textTransform={['uppercase', null, 'lowercase']}
                    _dark={{ color: "#DDFF00" }}
                    _light={{ 
                        color: "#7A852E",
                        fontWeight: "400"
                    }}
                    >
                    Customer Story

                </Text>
                <Text
                fontFamily={["Poppins,Poppins Placeholder,sans-serif", null, 'Poppins,Poppins Placeholder,sans-serif']}
                fontStyle={['normal', null, 'normal']}
                fontSize={['md', null, '1.8rem']}
                width ={{width: "100%"}}
                height = {{height:"auto"}}
                white-space = "pre-wrap"
                word-wrap ="break-word"
                word-break = "break-word"
                transform-perspective ={1200}
                font-weight = {400}
                color = "var(--token-9ba5df47-566d-4cce-965a-b909bddf5adc, #cccccc)"
                letter-spacing = {-0.03}
                line-height= {110}
                text-align = "center"
                >
                Scaling Success: How Horan Software
                 Solutions Empowered Our Growth Without Hiring More Staff
                </Text>
           </Box>

           
           </ImageBox>
           <Flex>
           <ImageBox isMobile={isMobile} video={video} opacity={opacity} translateY={translateY} >
                <Image
                    src="/static/images/custmor_story.jpg"
                    alt="Mella website"
                    width= {isMobile ? 350:700}
                    height =  {isMobile ?250: 500}
                    layout="responsive"
                    />  
            
           </ImageBox>
           </Flex>
   
      </Flex>
    );
  };

