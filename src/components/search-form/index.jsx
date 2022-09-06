import { useCallback, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { Button, IconButton } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';

import classes from "./styles.module.css"

import Drawer from "../drawer";
import Tipo from "./components/tipo"
import Experience from "./components/experience"

const Search = () => {
    const [ value, setValue ] = useState("");
    
    const openDrawer = useRef(null);

    const tipo = useMemo(() => <Tipo />, [])
    const experienceMemo = useMemo(() => <Experience />, []);

    const changeHandler = useCallback(event => setValue(event.target.value), []);
    const openDrawerHandler = useCallback(() => openDrawer.current?.(), [])

    return (
        <form className="flex ">
            <div className={classNames(`border border-black border-solid flex grow items-stretch mr-1 rounded-lg`)}>
                <input 
                    className="border-0 grow outline-none pl-2 rounded-l-lg"
                    onChange={changeHandler}
                    placeholder="Cidade ou codigo postal"
                    value={value}
                />
                <IconButton
                    className={classNames("border-l border-solid border-black p-1 rounded-r-lg rounded-l-none hover:bg-black hover:text-white")}
                    disabled={!Boolean(value.trim())}>
                    <SearchIcon className="" />
                </IconButton>
            </div>
            <Button 
                className="border-black capitalize py-1 text-black hover:bg-black hover:border-black hover:text-white"
                onClick={openDrawerHandler}
                variant="outlined">
                filtros
            </Button>
            <Drawer
                anchor="bottom"
                drawerPaper={classNames(classes.drawerPaper, `px-5 py-4`)}
                openHandler={openDrawer}>
                    <div>
                        { tipo }
                        { experienceMemo }
                    </div>
            </Drawer>
        </form>
    );
};

export default Search;