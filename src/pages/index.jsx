import { useContext, useEffect, useRef } from "react"
import { Button, Rating, Typography } from "@mui/material"
import classNames from "classnames";
import Image from "next/image";

import classes from "./styles.module.css";
import EditIcon from '@mui/icons-material/Edit';
import AppStoreIcon from "public/icons/apple-black-logo-svgrepo-com.svg";
import PlayStoreIcon from "public/icons/play-store-svgrepo-com.svg"

import Babysitters from "src/components/home-components/descubra-mais copy";
import ComoFunciona from "src/components/como-funciona";
import DescubraMais from "src/components/home-components/descubra-mais";
import Link from "src/components/link"
import Seguranca from "src/components/home-components/seguranca";
import Routes from "src/components/home-components/links"
import { AppContext } from "src/context";

import Candidates from "src/components/home-components/candidates"
import Hero from "src/components/home-components/hero"
import Employers from "src/components/home-components/home-page"

const Home = () => {
    const { filters: { user } } = useContext(AppContext);

    return (
        <main>
            <Hero />
            {
                user === "EMPLOYERS" ? <Employers /> : <Candidates />
            }
        </main>
    );
};

export default Home;