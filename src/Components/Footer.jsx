import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img2 from "../Assets/808018.jpg"

const Footer = () => {
  return (
    <>
      <Box
        bg={"blackAlpha.900"}
        color={"whiteAlpha.700"}
        minH={"40"}
        px={"16"}
        py={["16,8"]}
      >

        <Stack direction={["column","row"]} h={"full"} alignItems={"center"} p={"5"} >

            <VStack w={"full"} alignItems={["center","flex-start"]}>

                <Text fontWeight={"bold"}>About Us</Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We Are The Best Crypto Trading App in India, We Provide Our Guidance At Very Reasonable Price.</Text>

            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4","0"]} src={img2}/>
                <Text>Our Founder</Text>
            </VStack>

        </Stack>
      </Box>
    </>
  );
};

export default Footer;
