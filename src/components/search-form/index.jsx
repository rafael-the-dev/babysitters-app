import { useCallback, useContext, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { Avatar, Button, Hidden, IconButton, Stack } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';

import classes from "./styles.module.css";

import { FilterContext } from "src/context"

import Chip from "./components/chip";
import Drawer from "../drawer";
import DialogHeader from "src/components/dialog/components/dialog-header"
import Experience from "./components/experience";
import Tipo from "./components/tipo"
import Verificacoes from "./components/verificacoes";
import MaisFiltros from "./components/mais-filtros"
import Popover from "../popover"

const Search = () => {
    const { experienciasSelecionada, tiposSelecionados, totalCamposSelecionads, verificacoesSelecionadas } = useContext(FilterContext);

    const [ value, setValue ] = useState("");
    
    const openDrawer = useRef(null);
    const closeDrawer = useRef(null);
    const openTipoPopover = useRef(null);
    const openExperienciaPopover = useRef(null);
    const openVerificacoesPopover = useRef(null);

    const tipo = useMemo(() => <Tipo />, [])
    const experienceMemo = useMemo(() => <Experience />, []);
    const verificacoesMemo = useMemo(() => <Verificacoes />, []);
    const maisFiltrosMemo = useMemo(() => <MaisFiltros />, [])

    const changeHandler = useCallback(event => setValue(event.target.value), []);
    const openDrawerHandler = useCallback(() => openDrawer.current?.(), []);
    const clickHandler = useCallback(func => event => func.current?.(event), []);
    const closeDrawerHandler = useCallback(() => closeDrawer.current?.(), [])

    return (
        <div>
            <Hidden smUp>
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
                        <Avatar className={classes.total}>{ totalCamposSelecionads }</Avatar>
                    </Button>
                </form>
            </Hidden>
            <Drawer
                anchor="bottom"
                closeHandler={closeDrawer}
                drawerPaper={classNames(classes.drawerPaper, `py-4 sm:rounded-xl`)}
                openHandler={openDrawer}>
                    <DialogHeader onClose={closeDrawerHandler}>
                        <Hidden smUp>Filtrar resultados</Hidden>
                        <Hidden smDown>Mais filtros</Hidden>
                    </DialogHeader>
                    <div className="px-5 sm:rounded-xl sm:h-full sm:overflow-y-auto sm:px-6">
                        <Hidden smUp>
                            { tipo }
                            { experienceMemo }
                            { verificacoesMemo }
                        </Hidden>
                        { maisFiltrosMemo }
                    </div>
            </Drawer>
            <Hidden smDown>
                <div className="flex">
                    <Chip label="Tipo" onClick={clickHandler(openTipoPopover)} value={tiposSelecionados} />
                    <Chip label="Experiência" onClick={clickHandler(openExperienciaPopover)} value={experienciasSelecionada} />
                    <Chip label="Verificações" onClick={clickHandler(openVerificacoesPopover)} value={verificacoesSelecionadas} />
                    <Chip label="Mais Filtros" onClick={openDrawerHandler} value="4" />
                </div>
                <Popover paperClassName="border border-black border-solid mt-3 rounded-xl" onClickRef={openTipoPopover}>
                    { tipo }
                </Popover>
                <Popover paperClassName="border border-black border-solid mt-4 rounded-xl" onClickRef={openExperienciaPopover}>
                    { experienceMemo }
                </Popover>
                <Popover paperClassName="border border-black border-solid mt-3 rounded-xl" onClickRef={openVerificacoesPopover}>
                    { verificacoesMemo }
                </Popover>
            </Hidden>
        </div>
    );
};

export default Search;