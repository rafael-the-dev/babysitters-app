import classNames from "classnames"
import { Typography } from "@mui/material"

import classes from "./styles.module.css"

const Container = () => {

    return (
        <section className="px-5 py-12">
            <div className={classNames(classes.videoWrapper)}>
                <video autoPlay className="h-full object-cover w-full" loop muted  controlsList="nofullscreen nodownload noremoteplayback">
                    <source src="https://cdn.babysits.com/content/page/profile-wizard/get-started.mp4" type="video/mp4" />
                </video>
            </div>
            <Typography
                component="h1"
                className="font-bold mt-8 text-lg sm:text-xl">
                Crie seu perfil em algumas etapas fáceis
            </Typography>
            <Typography
                className="mt-3 text-sm sm:text-base">
                Encontre o trabalho de babá perfeito! Nós vamos ajudá-lo a cada passo do caminho.
            </Typography>
        </section>
    );
};

export default Container;