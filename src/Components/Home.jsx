import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "../Assets/jievani-weerasinghe-NHRM1u4GD_A-unsplash.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Box bg={"blackAlpha.900"} w={"full"} h={"85vh"} mb={"20vh"}>
          <Image w={"full"} h={"full"} objectFit={"cover"} src={img} />
        
        <HStack
          bgColor={"red"}
          display={"flex"}
          w={"full"}
          h={"10vh"}
          justifyContent={"center"}
          mt={"7vh"}
        >
          <Text
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"fit-content"}
            fontSize={"6xl"}
            color={"blackAlpha.900"}
            fontWeight={"thin"}
            p={"5"}
            bg={"whiteAlpha.900"}
            textTransform={"uppercase"}
            borderRadius={"md"}
          >
            Crypto
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default Home;
