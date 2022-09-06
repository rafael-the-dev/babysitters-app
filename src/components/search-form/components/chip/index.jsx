
import { Avatar, Button } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const ChipContainer = ({ label, onClick, value }) => (
    <button 
        className={classNames(classes.button, "bg-transparent border-black capitalize flex items-center mr-3")}
        onClick={onClick}
        variant="outlined"
    >
        { label }
        <Avatar className={classes.avatar}>{ value }</Avatar>
    </button>
);

export default ChipContainer;