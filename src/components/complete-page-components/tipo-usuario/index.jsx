import { Typography } from "@mui/material";
import classNames from "classnames";
import { useRouter } from "next/router"

import classes from "./styles.module.css";

import Button from "./components/button";
import Separator from "src/components/separator"

const Container = () => {
    const router = useRouter();

    const clickHandler = pathname => () => router.push(pathname); 

    return (
        <section className={classNames(classes.container, `border border-gray-300 border-solid mx-auto my-12
            py-6 px-4 md:px-8`)}>
            <Typography
                component="h1"
                className="font-bold text-xl">
                Concluir registo
            </Typography>
            <div className="mt-8">
                <Button onClick={clickHandler("/profile/get-started")}>Sou babysitter</Button>
                <Button onClick={clickHandler("/profile/get-started")}>Sou ama</Button>
                <Separator className="mt-6 mb-8">Ou</Separator>
                <Button>Estou à procura de babysitter</Button>
                <Button>Sou uma empresa ou uma agência</Button>
            </div>
        </section>
    );
};

export default Container;