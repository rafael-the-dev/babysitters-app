import { useCallback, useEffect, useRef } from "react"
import { Button, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";
import EditIcon from '@mui/icons-material/Edit';

import Babysitters from "src/components/home-components/descubra-mais copy";
import ComoFunciona from "src/components/como-funciona";
import DescubraMais from "src/components/home-components/descubra-mais";
import Link from "src/components/link"
import Seguranca from "src/components/home-components/seguranca";

const Home = () => {
    const swapText = useRef(null);
    const currentIndex = useRef(1);

    useEffect(() => {
        const list = [ "famílias", "babysitters", "amas" ];

        const timer = setInterval(() => {
            swapText.current.innerHTML = list[currentIndex.current];

            if(currentIndex.current + 1 >= list.length) {
                currentIndex.current = 0;
            } else {
                currentIndex.current += 1;
            }
        }, 2000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <main>
            <section className="relative">
                <div className={classNames(classes.videoWrapper, `w-full`)}>
                    <video autoPlay className={classNames(classes.video, `h-full object-cover w-full`)} loop muted>
                        <source src="https://cdn.babysits.com/content/global/hero/european/babysits_single_scene.mp4" type="video/mp4" />
                        <source src="https://cdn.babysits.com/content/global/hero/european/babysits_single_scene.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={classNames(classes.heroContentWrapper, "absolute h-full left-0 top-0 w-full",
                    "flex items-end px-5 pb-12 md:pb-16")}>
                    <div className="flex flex-col">
                        <Typography 
                            className={classNames(classes.heroTitle, "font-bold text-3xl text-white md:text-4xl")}
                            component="h1">
                            A plataforma de cuidados infantis em que 
                            <span className="px-2 text-cyan-400" ref={swapText}>famílias</span> 
                            confia
                        </Typography>
                        <Link href="/">
                            <Button
                                className="bg-cyan-700 mt-6 normal-case px-3 py-2 rounded-lg text-white sm:px-4 sm:py-3"
                                startIcon={<EditIcon />}>
                                Registe-se gratuitamente
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
            <Babysitters />
            <Seguranca />
            <ComoFunciona />
            <DescubraMais />
        </main>
    );
};

export default Home;