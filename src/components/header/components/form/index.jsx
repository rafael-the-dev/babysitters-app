import { useCallback, useMemo, useRef, useState } from "react";
import { Button, IconButton, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

import SearchIcon from '@mui/icons-material/Search';

import Link from "src/components/link";
import Drawer from "src/components/drawer"

const Form = () => {
    const [ open, setOpen ] = useState(false);

    const openHandler = useRef(null);
    const onClose = useCallback(() => setOpen(false), []);

    const drawerMemo = useMemo(() => (
        <Drawer 
            anchor="top" 
            onCloseHelper={onClose}
            openHandler={openHandler}>
            <div className={classNames("bg-white flex flex-col items-center py-8")}>
                <div className={classNames("flex")}>
                    <Link 
                        className={classNames(classes.selectedLink, "font-semibold mr-4 text-black after:block after:bg-black after:mx-auto")} href="/">
                        Procuro babysitter
                    </Link>
                    <Link className={classNames(classes.notSelectedLink, "font-semibold text-black after:block after:bg-black after:mx-auto")} href="/">
                        Trabalhos de babysitting
                    </Link>
                </div>
                <form className={classNames("border border-black border-solid flex items-stretch rounded-3xl py-2 pl-3 pr-1",
                    classes.form)}>
                    <div className="flex flex-col grow">
                        <label
                            className="font-semibold text-black text-xs"
                            htmlFor="search-form">
                            Encontre rapidamente um(a) babysitter
                        </label>
                        <input 
                            className="border-0 outline-none py-1 w-full"
                            id='search-form'
                            placeholder="Search"
                        />
                    </div>
                    <IconButton className="bg-cyan-400 text-white">
                        <SearchIcon />
                    </IconButton>
                </form>
            </div>
        </Drawer>
    ), [ onClose ])

    const clickHandler = useCallback(() => {
        openHandler.current?.();
        setOpen(true)
    }, []);

    const closeHandler = useCallback(() => setOpen(false), []);

    return (
        <div className="grow relative">
            <Button className={classNames(classes.button, `bg-transparent border-neutral-400 flex items-center 
                justify-between mx-auto outline-none rounded-2xl text-black`, { [classes.buttonOpen]: open })}
                onClick={clickHandler}
                variant="outlined">
                Porto
                <span className={classNames(classes.buttonIcon, "bg-cyan-400 text-white flex items-center justify-center rounded-full")}>
                    <SearchIcon />
                </span>
            </Button>
            { drawerMemo }
        </div>
    );
};

export default Form;

/**
 * <div className="flex flex-col items-center grow">
            <div 
                className={classNames("bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-10", classes.bgOpacity,
                open ? "block" : "hidden")}
                onClick={closeHandler}></div>
            <div className="">
                <div className={classNames("bg-white flex flex-col items-center", classes.content, { [classes.contentShow]: open })}>
                    <div className={classNames(classes.tabs, "flex", { [classes.tabsShow]: open })}>
                        <Link href="/">
                            Procuro babysitter
                        </Link>
                        <Link href="/">
                            Trabalhos de babysitting
                        </Link>
                    </div>
                    <form className={classNames("border border-black border-solid flex items-stretch rounded-xl px-2",
                        classes.form, { [classes.formShow]: open })}>
                        <input 
                            className="border-0 grow outline-none"
                            onFocus={focusHandler}
                            placeholder="Search"
                        />
                        <IconButton className="p-1">
                            <SearchIcon />
                        </IconButton>
                    </form>
                </div>
            </div>
            <form className={classNames("border border-black border-solid flex items-stretch rounded-xl px-2",
                    classes.form)}>
                <input 
                    className="border-0 grow outline-none"
                    onFocus={focusHandler}
                    placeholder="Search"
                />
                <IconButton className="p-1">
                    <SearchIcon />
                </IconButton>
            </form>
        </div>
 */