import { useCallback, useEffect, useRef } from "react"
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
                    "flex items-end px-5 pb-12 md:pb-16 xl:pb-28")}>
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
            <section className="px-5 py-12 sm:flex">
                <div className={classNames("relative", classes.appsImageContainer)}>
                    <Image 
                        alt=""
                        layout="fill"
                        src="https://cdn.babysits.com/content/global/app.webp"
                    />
                </div>
                <div className={classNames(classes.appsContent, "mt-8 sm:mt-0")}>
                    <Typography 
                        className="font-bold text-2xl"
                        component="h2">
                        Descubra a conveniência do app Babysits
                    </Typography>
                    <Typography 
                        className="font-medium mt-2 text-gray-500 sm:mt-4"
                        component="p">
                        Os cuidados infantis estão sempre ao seu alcance com a nossa aplicação. 
                        Visualize rapidamente os empregos de babysitter e as babysitters disponíveis na sua área!
                    </Typography>
                    <div className="flex mt-6">
                        <Link href="/">
                            <Button 
                                className="border-black capitalize text-black hover:bg-black hover:border-black hover:fill-white hover:text-white"
                                startIcon={<AppStoreIcon className={classes.buttonIcon} />}
                                variant="outlined">App store</Button>
                        </Link>
                        <Link className="ml-4" href="/">
                            <Button 
                                className="border-black capitalize text-black hover:bg-black hover:border-black hover:fill-white hover:text-white"
                                startIcon={<PlayStoreIcon className={classes.buttonIcon} />}
                                variant="outlined">Google play</Button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-cyan-200 justify-between mb-16 px-5 py-12 md:flex">
                <div className="md:mr-2 md:w-1/2">
                    <Typography 
                        className="font-bold text-2xl"
                        component="h2">
                        Babysits está aqui para você!
                    </Typography>
                    <Typography 
                        className="font-medium mt-2 opacity-90 sm:mt-4"
                        component="p">
                        Estamos lá para os pais que trabalham duro, para os pais que precisam 
                        de algum tempo para si mesmos e para as pessoas que estão lá para apoiá-los com cuidados infantis.
                    </Typography>
                </div>
                <div className="mt-8 md:mt-0">
                    <div className="flex items-center mt-3">
                        <Rating className="mr-3" name="read-only" value={4.7} readOnly />  
                        <span className="font-semibold text-lg">4,7 / 5</span>
                    </div>
                    <Link 
                        className="font-semibold inline-block mt-3 text-black underline"
                        href="/">
                        Ver todas as Avaliações do Google
                    </Link>
                </div>
            </section>
            <DescubraMais />
        </main>
    );
};

export default Home;