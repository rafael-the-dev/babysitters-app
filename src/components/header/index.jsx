import { useRef } from "react";
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

    return pathname === "/" ? <HeaderHome /> : <HeaderOthers />;
};

export default Header;