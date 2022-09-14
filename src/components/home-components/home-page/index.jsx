import { Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

import Babysitters from "../descubra-mais copy";
import ComoFunciona from "src/components/como-funciona";
import DescubraMais from "../descubra-mais";
import NossasApps from "../nossas-apps"
import Seguranca from "../seguranca";
import Routes from "../links"

const Home = () => {

    return (
        <>
            <Babysitters />
            <Seguranca />
            <ComoFunciona />
            <NossasApps />
            <DescubraMais />
            <section className="bg-cyan-200 justify-between mb-16 px-5 py-12 md:flex">
                <div className="md:mr-2 md:w-1/2">
                    <Typography 
                        className="font-bold text-2xl"
                        component="h2">
                        Aquilo em que acreditamos
                    </Typography>
                    <Typography 
                        className="font-medium mt-2 opacity-90 sm:mt-4"
                        component="p">
                        A Babysits se preocupa com o futuro das crianças! Essa é uma das razões 
                        pelas quais somos membros da Leaders For Climate Action e dedicamos parte de 
                        nossa receita à remoção de CO2 da atmosfera.
                    </Typography>
                </div>
            </section>
            <Routes />
        </>
    );
};

export default Home;