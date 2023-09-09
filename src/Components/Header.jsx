import { Button, HStack } from '@chakra-ui/react';
import React from 'react'
import ColorModeSwitcher from "../ColorModeSwitcher";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
    <HStack p={"4"} bg={"blackAlpha.500"} w={"100%"} h={"10vh"}>
        <Button variant={"unstyled"} >
            <Link to={"/"}>Home</Link>
        </Button>
        <Button variant={"unstyled"} mx={"5"}>
            <Link to={"/coins"}>Coins</Link>
        </Button>
        <Button variant={"unstyled"} >
            <Link to={"/exchanges"}>Exchanges</Link>
        </Button>

    <ColorModeSwitcher />
    </HStack>

    </>
  )
}

export default Header;