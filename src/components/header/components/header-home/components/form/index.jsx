import { useCallback, useMemo, useRef, useState } from "react"
import { Button, ClickAwayListener, Hidden, IconButton } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import CloseIcon from '@mui/icons-material/Close';
import NearMeIcon from '@mui/icons-material/NearMe';
import SearchIcon from '@mui/icons-material/Search';

import Link from "src/components/link";
import Popover from "src/components/popover";

const Form = () => {
    const [ open, setOpen ] = useState(false);

    const popoverClose = useRef(null);
    const popoverOpen = useRef(null);

    const popoverMemo = useMemo(() => (
        <Popover onClickRef={popoverOpen} onCloseRef={popoverClose}>
            <Link href="/">
                <Button className='py-3 px-4 text-black' startIcon={<NearMeIcon />}>
                    Pesquisar nas proximidades
                </Button>
            </Link>
        </Popover>
    ), [ ])

    const toggleState = useCallback(() => setOpen(b => !b), []);
    const focusHandler = useCallback((event) => popoverOpen.current?.(event), []);

    return (
        <div className="flex justify-end grow pr-3 md:justify-center md:pr-0">
            <div className={classNames(classes.content, "flex flex-col items-center py-8 w-full md:py-0",
            { [classes.contentShow]: open })}>
                <div className={classNames("flex justify-center")}>
                    <Link 
                        className={classNames(classes.selectedLink, "font-semibold mr-4 text-white text-sm text-center md:text-base after:block after:bg-black after:mx-auto")} href="/">
                        Procuro babysitter
                    </Link>
                    <Link className={classNames(classes.notSelectedLink, "font-semibold text-white text-sm text-center md:ml-4 md:text-base after:block after:bg-black after:mx-auto")} href="/">
                        Trabalhos de babysitting
                    </Link>
                </div>
                <form className={classNames("bg-white flex items-stretch mt-4 rounded-3xl py-2 pl-3 pr-1 md:mt-6",
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
                            onClick={focusHandler}
                            placeholder="Search"
                        />
                    </div>
                    <IconButton 
                        className="bg-cyan-400 text-white"
                        onClick={toggleState}>
                        <SearchIcon />
                    </IconButton>
                </form>
            </div>
            { popoverMemo }
            <Hidden mdUp>
                <IconButton className={classNames("text-white", { "bg-cyan-700 hover:bg-cyan-400": open })} onClick={toggleState}>
                    { open ? <CloseIcon /> : <SearchIcon  /> }
                </IconButton>
            </Hidden>
        </div>
    );
};

export default Form;