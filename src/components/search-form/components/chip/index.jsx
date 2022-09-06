
import { Avatar, Button } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const ChipContainer = ({ label, onClick, value }) => (
    <Button 
        className={classNames(classes.button, "bg-transparent border-neutral-400 capitalize flex items-center mr-1 text-black",
        "font-medium px-2 hover:bg-black hover:border-black hover:text-white last:mr-0")}
        onClick={onClick}
        variant="outlined"
    >
        { label }
        { Boolean(value) && <Avatar className={classes.avatar}>{ value }</Avatar> }
    </Button>
);

export default ChipContainer;