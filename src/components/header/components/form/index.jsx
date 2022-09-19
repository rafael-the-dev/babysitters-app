import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router"
import classNames from "classnames";

import classes from "./styles.module.css";

import SearchIcon from '@mui/icons-material/Search';

import DrawerForm from "../drawer-form";

const Form = forwardRef(({ className }, ref) => {
    const  { query: { city }} = useRouter();

    const [ open, setOpen ] = useState(false);

    const openHandler = useRef(null);
    const onClose = useCallback(() => setOpen(false), []);

    const drawerMemo = useMemo(() => (<DrawerForm onClose={onClose} onOpen={openHandler} />), [ onClose ])

    const clickHandler = useCallback(() => {
        openHandler.current?.();
        setOpen(true)
    }, []);

    const closeHandler = useCallback(() => setOpen(false), []);

    return (
        <div className={classNames("grow relative")} ref={ref}>
            <Button className={classNames(classes.button, `bg-transparent border-neutral-400 flex items-center 
                justify-between mx-auto outline-none rounded-2xl text-black`, { [classes.buttonOpen]: open },
                className)}
                onClick={clickHandler}
                
                variant="outlined">
                { city ?? "Comece a sua busca" }
                <span className={classNames(classes.buttonIcon, "bg-cyan-400 text-white flex items-center justify-center rounded-full")}>
                    <SearchIcon />
                </span>
            </Button>
            { drawerMemo }
        </div>
    );
});

Form.displayName = "Form";

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