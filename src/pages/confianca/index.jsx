import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import DefaultHero from "src/components/default-hero";


const Container = () => {

    return (
        <main>
            <DefaultHero className={classes.hero}>
                <Typography
                    component="h1"
                    className="font-bold text-center text-xl text-white sm:text-2xl lg:text-3xl">
                    Resulta porque há confiança
                </Typography>
            </DefaultHero>
        </main>
    );
}; 

export default Container;