import { useRef } from "react";
import { Hidden, IconButton } from "@mui/material"
import classNames from "classnames";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//import classes from "./styles.module.css"
import Form from "../form";
import Link from "src/components/link";
import Menu from "../menu"

const Header = () => {

    return (
        <header className={classNames(`border-b border-gray-400 border-solid flex items-center justify-between px-5 py-2 sm:py-4`)}>
            <Link className="uppercase" href="/">Logo</Link>
            <Form />
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