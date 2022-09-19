import { useCallback, useEffect, useRef } from "react";
import { Avatar, Badge, Button, IconButton } from "@mui/material"
import classNames from "classnames";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router"

import classes from "./styles.module.css";

import MenuIcon from '@mui/icons-material/Menu';

import Drawer from "src/components/drawer";
import ListItem from "../list-item";

const CustomBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        backgroundColor: "rgb(236,107,105)",
        borderRadius: 9999,
        height: 14,
        right: 4,
        top: 2,
        width: 14
    }
})

const Menu = () => {
    const { pathname } = useRouter();

    const buttonRef = useRef(null)
    const openDrawer = useRef(null);

    const onClick = () => openDrawer.current?.();

    const scrollHandler = useCallback(() => {
        const { scrollY } = window;

        if(scrollY > 50) {
            buttonRef.current.classList.add(classes.buttonBorder);
        } else {
            buttonRef.current.classList.remove(classes.buttonBorder);
        }
        
    }, []);

    useEffect(() => {
        const currentWindow = window;

        scrollHandler();

        currentWindow.addEventListener("scroll", scrollHandler);

        return () => {
            currentWindow.removeEventListener("scroll", scrollHandler);
        };
    }, [ pathname, scrollHandler ])

    return (
        <>
            <CustomBadge className={classes.badge} variant="dot">
                <Button
                    className={classNames("bg-white px-2 py-1 rounded-xl hover:bg-gray-100",
                    { "border border-gray-300 border-solid ": pathname !== "/" })}
                    onClick={onClick}
                    ref={buttonRef}>
                        <MenuIcon className="text-black" />
                        <Avatar 
                            alt=""
                            className={classes.avatar}
                            src="https://cdn.babysits.com/logo/no-image/no-image-rc-w200-h200.avif"
                        />
                </Button>
            </CustomBadge>
            <Drawer 
                drawerPaper={classNames(classes.drawerPaper)}
                openHandler={openDrawer} 
            >
                <div className="flex flex-col h-full justify-center w-full">
                    <ul className="border-b border-solid border-gray-400 pb-3">
                        <ListItem href="/" label="Faça o download da aplicação" />
                        <ListItem href="/" label="Dicas e artigos" />
                        <ListItem href="como-funciona" label="Como funciona" />
                        <ListItem href="confianca" label="Confiança e Segurança" />
                    </ul>
                    <ul className="pt-3">
                        <ListItem href="iniciar-sessao" label="Iniciar sessão" />
                        <ListItem href="registo" label="Registe-se" />
                    </ul>
                </div>
            </Drawer>
        </>
    );
};

export default Menu;