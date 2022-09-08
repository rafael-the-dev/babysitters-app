import { useRef } from "react";
import { Hidden, IconButton } from "@mui/material"
import classNames from "classnames";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import classes from "./styles.module.css"

import Link from "src/components/link";
import Menu from "../menu"

const Header = () => {

    return (
        <header className={classNames(`absolute flex items-center 
            justify-between left-0 px-5 py-2 top-0 w-full z-20 sm:py-4`)}>
            <Link className="uppercase" href="/">Logo</Link>
            <div className="flex items-center">
                <Hidden mdDown>
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                </Hidden>
                <Menu />
            </div>
        </header>
    );
};

export default Header;