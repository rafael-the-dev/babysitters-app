
import Image from "next/image";
import { Button, Breadcrumbs, Hidden, Grid, IconButton, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import VerifiedIcon from '@mui/icons-material/Verified';

import Link from "src/components/link"
import ListItem from "src/components/babysitter-list-item"
import Rating from "src/components/blue-rating"

const Container = () => {

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
                            <Link className="capitalize font-medium text-sm text-neutral-800 hover:font-semibold" href="/">Procuro babysitter</Link>
                            <Link className="capitalize font-medium text-sm text-neutral-800 hover:font-semibold" href="/">Babysitter porto</Link>
                            <Link className="capitalize font-medium text-sm text-neutral-800 hover:font-semibold" href="/">Adriana Bonifácio</Link>
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
                        alt="Adriana Bonifácio"
                        layout="fill"
                        src="https://cdn.babysits.com/users/f/7/b/3355522/babysitter-3355522-1645713548-rc-w350-h350.avif"
                    />
                </div>
                <div className="flex flex-col ml-4">
                    <div className="flex flex-col sm:flex-row">
                        <Typography
                            component="h1"
                            className="font-bold text-lg">
                            Adriana Bonifácio
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
                                <Rating value={4} /> 1 Avaliação 
                            </div>
                            <span className="font-bold ml-3">Supersitster</span>
                        </div>
                        <Typography
                            component="p"
                            className="leading-6 mt-4 text-sm">
                            Olá, o meu nome é Adriana Bonifácio. cadora de Infância e Professora do 1.º Ciclo do 
                            Ensino Básico. Considero-me uma pessoa compreensiva, organizada, pontual, responsável, 
                            carinhosa, dinâmica e criativa, características estas que considero essenciais para partilhar 
                            momentos de qualidade com crianças.
                        </Typography>
                    </div>
                    <ul className="border-t border-gray-400 border-solid px-5 pt-8 mt-8">
                        <ListItem 
                            description="> 2 anos"
                            title="Experiência de babysitting"
                            titleComponent="h2"
                        />
                        <ListItem 
                            description="Criança (Pré-escolar) • Criança (Ensino Básico) • Adolescente"
                            title="Experiência com a faixa etária"
                            titleComponent="h2"
                        />
                        <ListItem 
                            description="Adriana Bonifácio tem uma certificado em cuidados para crianças com necessidades especiais. Entre diretamente em contacto com Adriana Bonifácio para verificar as certificações. Saber mais"
                            title="Experiência com crianças com necessidades especiais"
                            titleComponent="h2"
                        />
                    </ul>
                    <ul className="border-t border-gray-400 border-solid px-5 pt-8 mt-8">
                        <ListItem 
                            description="Supersitters são babysitters que prestaram um excelente serviço na comunidade Babysits."
                            title="Adriana Bonifácio é um(a) Supersitter"
                            titleComponent="h2"
                        />
                        <ListItem 
                            description="Adriana Bonifácio forneceu com êxito um documento de identificação oficial. "
                            title="Documento de identificação"
                            titleComponent="h2"
                        />
                        <ListItem 
                            description="Adriana Bonifácio forneceu o Registo criminal, e este foi verificado pela Babysits. Saber mais
                            Emitido em: 16 de fevereiro de 2022"
                            title="Registo criminal"
                            titleComponent="h2"
                        />
                        <ListItem 
                            description="Adriana Bonifácio tem certificação em primeiros socorros. Entre em contacto diretamente com Adriana Bonifácio para verificar as certificações."
                            title="Certificado de primeiros socorros"
                            titleComponent="h2"
                        />
                    </ul>
                </Grid>
                <Grid className="bg-white fixed bottom-0 px-5 pb-4 w-full z-10 xl:pb-0 xl:relative xl:pl-0" item xs={12} xl={4}>
                    <div className={classNames(classes.contactContainer, "flex flex-col items-stretch mt-4 rounded-lg")}>
                        <Typography
                            component="h2"
                            className="font-bold">
                            8,00 €/hora <br/>
                            <span className="font-medium text-neutral-700">Valor por hora</span>
                        </Typography>
                        <Link className="mt-4" href="/">
                            <Button className="bg-cyan-700 capitalize px-4 rounded-lg text-white w-full hover:bg-cyan-400">
                                Contactar Adriana Bonifacio
                            </Button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
            <section>
                <Typography
                    component="h2"
                    className="font-bold text-lg">
                    Sobre mim
                </Typography>
            </section>
        </main>
    );
};

export default Container;