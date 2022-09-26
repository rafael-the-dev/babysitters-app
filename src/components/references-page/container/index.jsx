import { Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css"

import Tabs from "../tabs"

const Container = ({ children }) => {

    return (
        <main>
            <div className="border-b border-gray-300 border-solid px-5 py-3">

            </div>
            <section className={classNames("mx-auto px-5 py-12", classes.container)}>
                <Typography
                    component="h1"
                    className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl">
                    Referências
                </Typography>
                <Tabs />
                { children }
            </section>
        </main>
    );
};

export default Container;