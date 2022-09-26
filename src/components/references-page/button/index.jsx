import { Button } from "@mui/material";
import classNames from "classnames";
import { useRouter } from "next/router";

import classes from "./styles.module.css"

import Link from "src/components/link";

const ButtonContainer = ({ children, href }) => {
    const { pathname } = useRouter();
    
    return (
        <Link 
            href={href}>
            <Button
                className={classNames("rounded-none text-neutral-800", 
                {[classNames("border border-b-white border-gray-300 border-solid rounded-t-lg relative", classes.selectedButton)]: pathname === href})}>
                { children }
            </Button>
        </Link>
    );
};

export default ButtonContainer;