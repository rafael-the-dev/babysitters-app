import { Avatar, Button, Hidden } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import ListItem from "./components/list-item";
import SocialMediaLink from "./components/social-media";
import Title from "./components/title"

const Footer = () => {

    return (
        <footer className="bg-cyan-200 flex flex-col items-center px-5 pt-8 pb-12 lg:pt-12">
            <div className="border-solid border-gray-300 flex flex-col items-center justify-between lg:border-b lg:items-start xl:flex-row lg:pb-6 lg:w-full">
                <Hidden xlDown>
                    <Button
                        className={classNames(classes.button, "bg-white text-black")}
                        variant="contained">
                        Portuguese
                    </Button>
                </Hidden>
                <div className="lg:flex">
                    <div className="lg:mr-6 xl:mr-12">
                        <Title>Babysits</Title>
                        <ul className="flex flex-wrap justify-center lg:flex-col">
                            <ListItem href="/" label="Como funciona" />
                            <ListItem href="/" label="Ajuda" />
                            <ListItem href="/" label="Privacidade" />
                            <ListItem href="/" label="Termos" />
                            <ListItem href="/" label="Preços" />
                            <ListItem href="/" label="Informação sobre a empresa" />
                            <ListItem href="/" label="Babysits para Empresas" />
                        </ul>
                    </div>
                    <Hidden lgDown>
                        <div className="lg:mr-6 xl:mr-12">
                            <Title>Explorar</Title>
                            <ul className="flex flex-col">
                                <ListItem href="/" label="Sobre nós" />
                                <ListItem href="/" label="Dicas e artigos" />
                                <ListItem href="/" label="Confiança e Segurança" />
                                <ListItem href="/" label="Normas comunitárias" />
                                <ListItem href="/" label="Parceiros" />
                                <ListItem href="/" label="Babysits para necessidades especiais" />
                            </ul>
                        </div>
                        <div>
                            <Title>Popular</Title>
                            <ul className="flex flex-col">
                                <ListItem href="/" label="Babysitter Lisboa" />
                                <ListItem href="/" label="Babysitter Porto" />
                                <ListItem href="/" label="Babysitter Vila Nova de Gaia" />
                                <ListItem href="/" label="Babysitter Braga" />
                                <ListItem href="/" label="Babysitter Amadora" />
                                <ListItem href="/" label="Trabalhos de babysitting" />
                            </ul>
                        </div>
                    </Hidden>
                </div>
            </div>
            <ul className="flex justify-center mt-8">
                <SocialMediaLink href="#" ><FacebookIcon /></SocialMediaLink>
                <SocialMediaLink href="#" ><InstagramIcon /></SocialMediaLink>
                <SocialMediaLink href="#" ><TwitterIcon /></SocialMediaLink>
                <SocialMediaLink href="#" ><LinkedInIcon /></SocialMediaLink>
            </ul>
            <div className="font-medium mt-8">
                &copy;Babysits B.V.
            </div>
        </footer>
    );
};

export default Footer;