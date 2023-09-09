import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";

const Exchanges = () => {
  const [exchanges, setexchanges] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setexchanges(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <Error message={"Error While Fetching Exchanges"}/>;
  return (
    <>
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <HStack flexWrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => {
              return (
                <>
                  <ExchangCard
                    name={i.name}
                    img={i.image}
                    rank={i.trust_score_rank}
                    url={i.url}
                    key={i.id}
                  />
                </>
              );
            })}
          </HStack>
        )}
      </Container>
    </>
  );
};

const ExchangCard = ({ name, img, rank, url }) => {
  return (
    <a href={url} target="blank">
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
          alt={"Exchanges"}
        />
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
};

export default Exchanges;
