import { useCallback, useEffect, useRef } from "react"
import Image from "next/image";
import { Button, Breadcrumbs, Hidden, Grid, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router"
import classNames from "classnames";

import classes from "./styles.module.css";

import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SmokingRoomsOutlinedIcon from '@mui/icons-material/SmokingRoomsOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';

import AvalicacaoCard from "src/components/babysitter-page-components/avaliacao"
import Carousel from "src/components/carousel"
import Link from "src/components/link"
import ListItem from "src/components/babysitter-list-item"
import OutrasOpcoes from "src/components/babysitter-page-components/outras-opcoes"
import Rating from "src/components/blue-rating"

const Container = () => {
    const { asPath } = useRouter();
    
    const contactCardRef = useRef(null);

    const avaliacoes = [
        { description: "", image: "https://xsgames.co/randomusers/avatar.php?g=male", name: "Diego", rating: 4, time: "Setembro 2022" },
        { description: "J??ssica ?? muito prestativa e atenciosa! Recomendo seu trabalho feito com empenho e dedica????o!", image: "https://xsgames.co/randomusers/avatar.php?g=female", name: "Jessica", rating: 3.5, time: "Setembro 2022" },
        { description: "She was perfect. Would highly recommend. English is great, responsive and trustworthy.", image: "https://xsgames.co/randomusers/avatar.php?g=male", name: "Aakash", rating: 2 },
        { description: "Nilza is very punctual, she does her best, she knows a lot about her city which is very useful. We just wished she had more experience wit ", image: "https://xsgames.co/randomusers/avatar.php?g=female", name: "Nilza", rating: 5, time: "Setembro 2022" },
        { description: "", image: "https://xsgames.co/randomusers/avatar.php?g=male", name: "Carlos", rating: 3.4, time: "Setembro 2022", time: "Setembro 2022" },
        { description: "Celeste ?? muito prestativa e atenciosa! Recomendo seu trabalho feito com empenho e dedica????o!", image: "https://xsgames.co/randomusers/avatar.php?g=female", name: "Celeste", rating: 4, time: "Setembro 2022" },
        { description: "She was perfect. Would highly recommend. English is great, responsive and trustworthy.", image: "https://xsgames.co/randomusers/avatar.php?g=female", name: "Marta", rating: 4, time: "Setembro 2022" },
        { description: "", image: "https://xsgames.co/randomusers/avatar.php?g=male", name: "Joaquim", rating: 2, time: "Setembro 2022" },
        { description: "Matilde ?? muito prestativa e atenciosa! Recomendo seu trabalho feito com empenho e dedica????o!", image: "https://xsgames.co/randomusers/avatar.php?g=female", name: "Matilde", rating: 2.5, time: "Setembro 2022" }
    ];

    const scrollHandler = useCallback(() => {
        const { scrollY } = window;

        if((scrollY < 1600) && (scrollY > 225)) {
            contactCardRef.current.classList.add(classes.contactCard);
            return;
        }

        contactCardRef.current.classList.remove(classes.contactCard)
    }, []);

    useEffect(() => {
        const currentWindow = window;

        scrollHandler();
        currentWindow.addEventListener("scroll", scrollHandler);

        return () => {
            currentWindow.removeEventListener("scroll", scrollHandler);
        };
    }, [ scrollHandler ])

    return (
        <main>
            <div className="flex items-center justify-between py-2 px-5">
                <div>
                    <Hidden mdUp>
                        <Link className="capitalize flex items-center font-medium text-black hover:underline" href="/">
                            <ArrowBackIosNewIcon className="text-sm" />
                            Babysitter porto
                        </Link>
                    </Hidden>
                    <Hidden mdDown>
                        <Breadcrumbs>
                            <Link className="capitalize font-medium text-sm text-neutral-800 hover:font-semibold" href="/">Babysits</Link>
                            <Link className="capitalize font-medium text-sm text-neutral-800 hover:font-semibold" href="/babysitter">Procuro babysitter</Link>
                            <Link className="capitalize font-medium text-sm text-neutral-800 hover:font-semibold" href="/babysitter/porto">Babysitter porto</Link>
                            <Link className="capitalize font-medium text-sm text-neutral-800 hover:font-semibold" href="/">Adriana Bonif??cio</Link>
                        </Breadcrumbs>
                    </Hidden>
                </div>
                <div className="flex">
                    <Hidden xlUp>
                        <IconButton>
                            <ShortcutIcon />
                        </IconButton>
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                    </Hidden>
                    <Hidden xlDown>
                        <Button
                            className="normal-case text-black underline"
                            startIcon={<ShortcutIcon />}>
                            Partilhar
                        </Button>
                        <Button
                            className="normal-case text-black underline"
                            startIcon={<FavoriteBorderIcon />}>
                            Guardar
                        </Button>
                    </Hidden>
                </div>
            </div>
            <section 
                className={classNames(classes.hero, `bg-cover bg-center bg-no-repeat flex items-center px-5`)}
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(89,190,201, .8), rgb(89,190,201)), url(https://cdn.babysits.com/users/f/7/b/3355522/babysitter-3355522-1645713548-rc-w350-h350.avif)`
                }}>
                <div className={classNames(classes.imageContainer, `relative rounded-xl`)}>
                    <Image 
                        alt="Adriana Bonif??cio"
                        layout="fill"
                        src="https://cdn.babysits.com/users/f/7/b/3355522/babysitter-3355522-1645713548-rc-w350-h350.avif"
                    />
                </div>
                <div className="flex flex-col ml-4">
                    <div className="flex flex-col sm:flex-row">
                        <Typography
                            component="h1"
                            className="font-bold text-lg">
                            Adriana Bonif??cio
                        </Typography>
                        <div className="flex items-center mt-2 sm:mt-0 sm:ml-3">
                            <VerifiedIcon />
                            <span className={classNames(classes.index, "font-bold ml-2 pl-4 relative before:absolute")}>24</span>
                        </div>
                    </div>
                </div>
            </section>
            <Grid container className="xl:justify-between">
                <Grid className="xl:pr-5" item xs={12} xl={8}>
                    <div className="px-5 py-8">
                        <div className="flex items-center">
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <Rating value={4} /> 1 Avalia????o 
                            </div>
                            <span className="font-bold ml-3">Supersitster</span>
                        </div>
                        <Typography
                            component="p"
                            className="leading-6 mt-4 text-sm sm:leading-7 sm:text-base">
                            Ol??, o meu nome ?? Adriana Bonif??cio. cadora de Inf??ncia e Professora do 1.?? Ciclo do 
                            Ensino B??sico. Considero-me uma pessoa compreensiva, organizada, pontual, respons??vel, 
                            carinhosa, din??mica e criativa, caracter??sticas estas que considero essenciais para partilhar 
                            momentos de qualidade com crian??as.
                        </Typography>
                    </div>
                    <ul className="border-t border-gray-400 border-solid px-5 pt-8 mt-8">
                        <ListItem 
                            description="> 2 anos"
                            title="Experi??ncia de babysitting"
                            titleComponent="h2"
                        />
                        <ListItem 
                            description="Crian??a (Pr??-escolar) ??? Crian??a (Ensino B??sico) ??? Adolescente"
                            title="Experi??ncia com a faixa et??ria"
                            titleComponent="h2"
                        />
                        <ListItem 
                            description="Adriana Bonif??cio tem uma certificado em cuidados para crian??as com necessidades especiais. Entre diretamente em contacto com Adriana Bonif??cio para verificar as certifica????es. Saber mais"
                            title="Experi??ncia com crian??as com necessidades especiais"
                            titleComponent="h2"
                        />
                    </ul>
                    <ul className="border-t border-gray-400 border-solid px-5 pt-8 mt-8">
                        <ListItem 
                            description="Supersitters s??o babysitters que prestaram um excelente servi??o na comunidade Babysits."
                            title="Adriana Bonif??cio ?? um(a) Supersitter"
                            titleComponent="h2"
                        />
                        <ListItem 
                            description="Adriana Bonif??cio forneceu com ??xito um documento de identifica????o oficial. "
                            title="Documento de identifica????o"
                            titleComponent="h2"
                        />
                        <ListItem 
                            description="Adriana Bonif??cio forneceu o Registo criminal, e este foi verificado pela Babysits. Saber mais
                            Emitido em: 16 de fevereiro de 2022"
                            title="Registo criminal"
                            titleComponent="h2"
                        />
                        <ListItem 
                            description="Adriana Bonif??cio tem certifica????o em primeiros socorros. Entre em contacto diretamente com Adriana Bonif??cio para verificar as certifica????es."
                            title="Certificado de primeiros socorros"
                            titleComponent="h2"
                        />
                    </ul>
                    <section className="border-t border-gray-400 border-solid mt-12 px-5 py-8">
                        <Typography
                            component="h2"
                            className="font-bold text-lg">
                            Sobre mim
                        </Typography>
                        <ul className={classNames(classes.sobreMimList, "flex flex-wrap justify-between mt-6")}>
                            <ListItem 
                                description="N??o"
                                icon={<AssignmentIndOutlinedIcon />}
                                title="Carta de condu????o"
                            />
                            <ListItem 
                                description="N??o"
                                icon={<DirectionsCarOutlinedIcon />}
                                title="Carro"
                            />
                            <ListItem 
                                description="N??o"
                                icon={<AccessibilityOutlinedIcon />}
                                title="Tem filhos"
                            />
                            <ListItem 
                                description="N??o"
                                icon={<SmokingRoomsOutlinedIcon />}
                                title="Fumante"
                            />
                            <ListItem 
                                description="Na casa da fam??lia"
                                icon={<HomeOutlinedIcon />}
                                title="Local de babysitting preferido"
                            />
                            <ListItem 
                                description="Portugu??s"
                                icon={<TranslateOutlinedIcon />}
                                title="L??nguas que falo"
                            />
                            <ListItem 
                                description="Mestrado"
                                icon={<SchoolOutlinedIcon />}
                                title="Educa????o"
                            />
                            <ListItem 
                                description="5 vezes"
                                icon={<FavoriteBorderIcon />}
                                title="Favoritos"
                            />
                            <li></li>
                        </ul>
                    </section>
                    <div className="border-t border-gray-400 border-solid mt-12 px-5 py-8 sm:flex sm:pt-12">
                        <div className="sm:w-1/2">
                            <Typography
                                component="h2"
                                className="font-bold text-lg">
                                Habilidades
                            </Typography>
                            <ul className="mt-3">
                                <li className="flex items-center mb-2">
                                    <ContentCutOutlinedIcon className="mr-2" />
                                    Trabalhos manuais
                                </li>
                                <li className="flex items-center mb-2">
                                    <CreateOutlinedIcon className="mr-2" />
                                    Desenhar
                                </li>
                                <li className="flex items-center mb-2">
                                    <LocalLibraryOutlinedIcon className="mr-2" />
                                    Ler
                                </li>
                                <li className="flex items-center mb-2">
                                    <MusicNoteOutlinedIcon className="mr-2" />
                                    M??sica
                                </li>
                                <li className="flex items-center mb-2">
                                    <CasinoOutlinedIcon className="mr-2" />
                                    Jogos
                                </li>
                            </ul>
                        </div>
                        <div className="border-t border-gray-400 border-solid mt-8 pt-8 sm:border-t-0 sm:mt-0 sm:pt-0 sm:w-1/2">
                            <Typography
                                component="h2"
                                className="font-bold text-lg">
                                Tenho disponibilidade para/Estou ?? vontade com
                            </Typography>
                            <ul className="mt-3">
                                <li className="flex items-center mb-2">
                                    <PetsOutlinedIcon className="mr-2" />
                                    Animais de estima????o
                                </li>
                                <li className="flex items-center">
                                    <ViewAgendaOutlinedIcon className="mr-2" />
                                    Apoiar com trabalhos de casa
                                </li>
                            </ul>
                        </div>
                    </div>
                </Grid>
                <Grid className="bg-white fixed bottom-0 px-5 pb-4 w-full z-10 xl:pb-0 xl:relative xl:pl-0" item xs={12} xl={4}>
                    <div 
                        className={classNames(classes.contactContainer, classes.contactCard, "xl:items-stretch",
                        "flex flex-col items-stretch justify-between mt-4 rounded-lg sm:flex-row sm:items-center xl:flex-col")}
                        ref={contactCardRef}>
                        <Typography
                            component="h2"
                            className="font-bold">
                            8,00 ???/hora <br/>
                            <span className="font-medium text-neutral-700">Valor por hora</span>
                        </Typography>
                        <Link className="mt-4 sm:mt-0 xl:mt-4" href="/">
                            <Button className="bg-cyan-700 capitalize px-4 rounded-lg text-white w-full hover:bg-cyan-400">
                                Contactar Adriana Bonifacio
                            </Button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
            <section className="px-5">
                <div className="border-t border-gray-400 border-solid py-8 md:py-12">
                    <Typography
                        component="h2"
                        className="font-bold mb-4 text-lg">
                        { avaliacoes.length } Avalia????es
                    </Typography>
                    <Carousel
                        spacing={{ xs: { width: 1, gap: 80 }, sm: { width: 2, gap: 80 }, md: { width: 2.2, gap: 80 }, lg: { width: 2.5, gap: 80 }, xl: { width: 3.1, gap: 80 }, '2xl': { width: 3.7, gap: 80 } }}>
                        {
                            avaliacoes.map((item, index) => (
                                <AvalicacaoCard { ...item } isRating key={index} />
                            ))
                        }
                    </Carousel>
                </div>
            </section>
            <section className="px-5">
                <div className="border-t border-gray-400 border-solid py-8 md:py-12">
                    <Typography
                        component="h2"
                        className="font-bold mb-4 text-lg">
                        { avaliacoes.length } Refer??ncia{ avaliacoes.length > 1 && "s" }
                    </Typography>
                    <Carousel
                        spacing={{ xs: { width: 1, gap: 80 }, sm: { width: 2, gap: 80 }, md: { width: 2.2, gap: 80 }, lg: { width: 2.5, gap: 80 }, xl: { width: 3.1, gap: 80 }, '2xl': { width: 3.7, gap: 80 } }}>
                        {
                            avaliacoes.map((item, index) => (
                                <AvalicacaoCard { ...item } key={index} />
                            ))
                        }
                    </Carousel>
                </div>
            </section>
            <div className="px-5">
                <div className="border-t border-gray-400 border-solid pt-8 md:flex md:pt-12">
                    <div className="md:w-1/2">
                        <Typography
                            component="h2"
                            className="font-bold text-lg">
                            Adriana Bonif??cio forneceu
                        </Typography>
                        <ul className="mt-3">
                            <li className="flex items-center mb-2">
                                <CheckCircleOutlineOutlinedIcon className="mr-2 text-cyan-400" />
                                Documento de identifica????o
                            </li>
                            <li className="flex items-center mb-2">
                                <CheckCircleOutlineOutlinedIcon className="mr-2 text-cyan-400" />
                                Endere??o de email
                            </li>
                            <li className="flex items-center mb-2">
                                <CheckCircleOutlineOutlinedIcon className="mr-2 text-cyan-400" />
                                Conta LinkedIn
                            </li>
                        </ul>
                    </div>
                    <div className="border-t border-gray-400 border-solid mt-8 pt-8 md:border-t-0 md:mt-0 md:pt-0 md:w-1/2">
                        <Typography
                            component="h2"
                            className="font-bold text-lg">
                            Atividade
                        </Typography>
                        <ul className="mt-6">
                            <ListItem 
                                description="Setembro 2021"
                                icon={<CreateOutlinedIcon />}
                                title="Membro desde"
                            />
                            <ListItem 
                                description="100%"
                                icon={<ThumbUpOutlinedIcon />}
                                title="Mensagens respondidas"
                            />
                            <ListItem 
                                description="6 horas"
                                icon={<TimerOutlinedIcon />}
                                title="Tempo m??dio de resposta"
                            />
                            <ListItem 
                                description="1"
                                icon={<TodayOutlinedIcon />}
                                title="Marca????es"
                            />
                            <ListItem 
                                description="0"
                                icon={<LoopOutlinedIcon />}
                                title="Marca????es repetidas"
                            />
                        </ul>
                    </div>
                </div>
                <OutrasOpcoes />
            </div>
        </main>
    );
};

export default Container;