import { useCallback, useContext } from "react";
import classNames from "classnames";
import Button from "@mui/material/Button";

import classes from "./styles.module.css"

import { AppContext } from "src/context";

const Tab = ({ children, className, id, }) => {
    const { addUser, filters: { user } } = useContext(AppContext);

    const clickHandler = useCallback(prop => () => addUser(prop), [ addUser ]);

    return (
        <Button 
            className={classNames(`capitalize font-semibold mr-4 text-white text-xs text-center md:text-base after:block
            after:bg-black after:mx-auto`, className, { [classes.tab]: id === user })} 
            onClick={clickHandler(id)}>
           { children }
        </Button>
    );;
}

export default Tab;