import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import ComoFunciona from "src/components/babysitter-page-components/como-funciona";
import DefaultHero from "src/components/default-hero";
import DescubraMais from "src/components/home-components/descubra-mais";
import Seguranca from "src/components/home-components/seguranca";

const Container = () => {

    return (
        <main>
            <DefaultHero className={classes.hero}>
                <div className="text-center text-white">
                    <Typography
                        component="h1"
                        className="font-bold  text-xl sm:text-2xl lg:text-3xl">
                        Como funciona
                    </Typography>
                    <Typography
                        component="p"
                        className={classNames(classes.heroDescription, "font-medium mt-4 mx-auto")}>
                        Babysits é uma plataforma comunitária online que põe babysitters e famílias em contacto
                    </Typography>
                </div>
            </DefaultHero>
            <div className="justify-between px-5 pt-12 pb-4 text-center md:flex md:text-left md:pt-16">
                <div className={classNames(classes.column)}>
                    <Typography
                        component="h1"
                        className="font-bold  text-xl sm:text-2xl lg:text-3xl">
                        Como funciona
                    </Typography>
                    <Typography
                        component="p"
                        className="mt-4">
                        Quer esteja à procura de uma excelente babysitter ou trabalho de babysitting, a Babysits torna tudo mais fácil e transparente. Como utilizador, possui total controlo sobre o seu perfil, preços, com quem trabalha e como interage com os outros membros.
                    </Typography>
                </div>
                <div className={classNames(classes.column, 'mt-8 md:mt-0')}>
                    <Typography
                        component="h1"
                        className="font-bold  text-xl sm:text-2xl lg:text-3xl">
                        Assuma o controlo
                    </Typography>
                    <Typography
                        component="p"
                        className="mt-4">
                            Leia avaliações e perfis detalhados com verificações de confiança. Faça uma pré-seleção, realize entrevistas e selecione a pessoa indicada. Planeie e pague as marcações através da plataforma. Quer seja para encontrar um trabalho de babysitting, uma babysitter ou até planear marcações, a Babysits traz-lhe paz de espírito.
                    </Typography>
                </div>
            </div>
            <Seguranca />
            <ComoFunciona />
            <DescubraMais />
        </main>
    );
};

export default Container;