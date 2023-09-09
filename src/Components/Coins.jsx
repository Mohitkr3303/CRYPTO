import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import CoinCard from "../Components/CoinCard";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";

const Coins = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [page, setpage] = useState(1);
  const [currency, setcurrency] = useState(`inr`);

  const currencySymbol =
    currency === `inr` ? `₹` : currency === `eur` ? `€` : `$`;

  const changePage = (page) => {
    setpage(page);
    setloading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setcoins(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <Error message={"Error While Fetching Coins"} />;
  return (
    <>
      <Container maxW={"fit-content"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <RadioGroup value={currency} onChange={setcurrency} p={"8"}>
              <HStack spacing={"4"}>
                <Radio value={"inr"}>₹ INR</Radio>
                <Radio value={"usd"}>$ USD</Radio>
                <Radio value={"eur"}>€ EURO</Radio>
              </HStack>
            </RadioGroup>
            <HStack flexWrap={"wrap"} justifyContent={"space-evenly"}>
              {coins.map((i) => {
                return (
                  <CoinCard
                    id={i.id}
                    price={i.current_price}
                    name={i.name}
                    img={i.image}
                    symbol={i.symbol}
                    key={i.id}
                    currencySymbol={currencySymbol}
                  />
                );
              })}
            </HStack>
          </>
        )}

        <HStack overflow={"auto"} w={"full"}>
          {btns.map((item, index) => (
            <Button
              key={index}
              bgColor={"blackAlpha.900"}
              color={"whiteAlpha.500"}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      </Container>
    </>
  );
};

export default Coins;
