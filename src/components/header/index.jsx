import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router"
import { Hidden, IconButton } from "@mui/material"
import classNames from "classnames";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';

import classes from "./styles.module.css"

import HeaderHome from "./components/header-home";
import HeaderOthers from "./components/header-others"

const Header = () => {
    const { pathname } = useRouter();
    const headerRef = useRef(null);

    const scrollHandler = useCallback(() => {
        const { scrollY } = window;

        if(scrollY > 50) {
            headerRef.current.classList.add(classes.headerFixed);
        } else {
            headerRef.current.classList.remove(classes.headerFixed);
        }
        
    }, []);

    useEffect(() => {
        headerRef.current = document.querySelector("header");
        const currentWindow = window;

        scrollHandler();

        headerRef.current.classList.add(classes.header);
        currentWindow.addEventListener("scroll", scrollHandler);

        return () => {
            currentWindow.removeEventListener("scroll", scrollHandler);
        };
    }, [ pathname, scrollHandler ])

    return pathname === "/" ? <HeaderHome /> : <HeaderOthers />;
};

export default Header;