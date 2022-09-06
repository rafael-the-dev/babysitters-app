import { useRef } from "react";
import { Hidden, IconButton } from "@mui/material"
import classNames from "classnames";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';

import classes from "./styles.module.css"

import Link from "../link";
import Form from "./components/form";
import Drawer from "../drawer";
import ListItem from "./components/list-item";

const Header = () => {
    const openDrawer = useRef(null);

    const onClick = () => openDrawer.current?.();

    return (
        <header className={classNames(`border-b border-gray-400 border-solid flex items-center justify-between px-5 py-2 sm:py-4`)}>
            <Link className="uppercase" href="/">Logo</Link>
            <Hidden smDown><Form /></Hidden>
            <div className="flex items-center">
                <Hidden mdDown>
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                </Hidden>
                <IconButton onClick={onClick}>
                    <MenuIcon />
                </IconButton>
            </div>
            <Drawer 
                drawerPaper={classNames(classes.drawerPaper)}
                openHandler={openDrawer} 
            >
                <div className="flex flex-col h-full justify-center w-full">
                    <ul className="border-b border-solid border-gray-400 pb-3">
                        <ListItem href="/" label="Faça o download da aplicação" />
                        <ListItem href="/" label="Dicas e artigos" />
                        <ListItem href="/" label="Como funciona" />
                        <ListItem href="babysitter" label="Confiança e Segurança" />
                    </ul>
                    <ul className="pt-3">
                        <ListItem href="/" label="Iniciar sessão" />
                        <ListItem href="/" label="Registe-se" />
                    </ul>
                </div>
            </Drawer>
        </header>
    );
};

export default Header;