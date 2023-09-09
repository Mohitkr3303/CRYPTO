import React from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const CoinCard = ({ name, img, price,id ,symbol,currencySymbol=`₹`}) => {
  return (
    <Link to={`/coin/${id}`} target={"blank"}>
      <VStack
        w={"52"}
        shadow={"lg"}
        borderRadius={"lg"}
        transition={"all .3s"}
        m={"4"}
        p={"3"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={img}
          w={"50"}
          h={"50"}
          objectFit={"contain"}
          alt={"Coins"}
        />
        <Heading size={"md"} noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price?`${currencySymbol}${price}`:`NAN`}</Text>
      </VStack>

    </Link>
  );
};

export default CoinCard;
