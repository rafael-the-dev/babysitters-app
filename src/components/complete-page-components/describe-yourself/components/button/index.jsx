import DefaultButton from "@mui/material/Button";

import classes from "./styles.module.css";

import classNames from "classnames";

const Button = ({ children, onClick, selected }) => {
    return (
        <DefaultButton
            className={classNames("border-neutral-800 mb-3 py-2 rounded-none hover:border-neutral-800", 
            { "bg-neutral-800 text-white hover:bg-neutral-700": selected },
            { "text-neutral-800 hover:bg-neutral-800 hover:text-white": !selected}
            , classes.button)}
            onClick={onClick}
            variant={selected ? "contained": "outlined"}>
            { children }
        </DefaultButton>
    )
};

export default Button;