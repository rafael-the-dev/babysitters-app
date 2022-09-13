import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { Button, Hidden, IconButton } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import CloseIcon from '@mui/icons-material/Close';
import NearMeIcon from '@mui/icons-material/NearMe';
import SearchIcon from '@mui/icons-material/Search';

import { AppContext } from "src/context"

import Link from "src/components/link";
import Popover from "src/components/popover";
import FixedForm from "../../../form";
import Drawer from "../../../drawer-form";
import SearchFilters from "../../../tabs";

const Form = () => {
    const { addUser, filters: { type } } = useContext(AppContext)
    const [ open, setOpen ] = useState(false);

    const contentRef = useRef(null);
    const buttonRef = useRef(null);
    const searchButtonRef = useRef(null);
    const popoverClose = useRef(null);
    const popoverOpen = useRef(null);
    const onOpenRef = useRef(null);
    const onOpenSearchFilters = useRef(null);

    const labelFilter = useMemo(() => {
        const types = {
            "CAES": "dogsitter",
            "CRIANCAS": "babysitter"
        };

        return types[type];
    }, [ type ])
    const drawerMemo = useMemo(() => <div className={classes.hideDrawer}><Drawer onOpen={onOpenRef} /></div>, []);
    const searchButtonMemo = useMemo(() => <div className={classes.hideSearchButton}><FixedForm ref={buttonRef} /></div>, [])

    const popoverMemo = useMemo(() => (
        <Popover onClickRef={popoverOpen} onCloseRef={popoverClose}>
            <Link href="/">
                <Button className='py-3 px-4 text-black' startIcon={<NearMeIcon />}>
                    Pesquisar nas proximidades
                </Button>
            </Link>
        </Popover>
    ), [ ]);

    const focusHandler = useCallback((event) => {
        popoverOpen.current?.(event)
        onOpenSearchFilters.current?.();
    }, [])

    const toggleState = useCallback(() => {
        const { scrollY } = window;
        if(scrollY > 50) {
            onOpenRef.current?.();
        } else {
            setOpen(b => !b);
        }
    }, []);

    const clickHandler = useCallback(prop => () => addUser(prop), []);
    
    const scrollHandler = useCallback(() => {
        const { innerWidth, scrollY } = window;

        if(innerWidth > 768) {
            try {
                if(scrollY > 50) {
                    contentRef.current.classList.add(classes.contentScroll);
                    buttonRef.current?.classList?.remove(classes.fixedFormButton);
                } else {
                    contentRef.current.classList.remove(classes.contentScroll);
                    buttonRef.current?.classList?.add(classes.fixedFormButton);
                }
            }catch(e) {
                console.error(e)
            }
        }

        if(scrollY > 50) {
            setOpen(currentState => {
                if(currentState) {
                    return false;
                }
                return false;
            })
            searchButtonRef.current.classList.add("bg-cyan-700");
        } else {
            searchButtonRef.current.classList.remove("bg-cyan-700")
        }
        
    }, []);

    useEffect(() => {
        const currentWindow = window;

        scrollHandler();
        
        currentWindow.addEventListener("scroll", scrollHandler);
        currentWindow.addEventListener("resize", scrollHandler);

        return () => {
            currentWindow.removeEventListener("scroll", scrollHandler);
            currentWindow.removeEventListener("resize", scrollHandler);
        };
    }, [ scrollHandler ])

    return (
        <div className={classNames(classes.container, "flex justify-end grow pr-3 md:justify-center md:pr-0")}>
            { searchButtonMemo }
            { drawerMemo }
            <div className={classNames(classes.content, "flex flex-col items-center py-8 w-full md:py-0",
            { [classes.contentShow]: open })}
                ref={contentRef}>
                <div className={classNames("flex justify-center")}>
                    <Link 
                        className={classNames(classes.selectedLink, "font-semibold mr-4 text-white text-sm text-center md:text-base after:block after:bg-black after:mx-auto")} 
                        href="/"
                        onClick={clickHandler("EMPLOYERS")}>
                        Procuro babysitter
                    </Link>
                    <Link 
                        className={classNames(classes.notSelectedLink, "font-semibold text-white text-sm text-center md:ml-4 md:text-base after:block after:bg-black after:mx-auto")} 
                        href="/"
                        onClick={clickHandler("CANDIDATES")}>
                        Trabalhos de babysitting
                    </Link>
                </div>
                <form className={classNames("bg-white flex items-stretch mt-4 rounded-3xl py-2 pl-3 pr-1 md:mt-6",
                    classes.form)}>
                    <div className="flex flex-col grow">
                        <label
                            className="font-semibold text-black text-xs"
                            htmlFor="search-form">
                            Encontre rapidamente um(a) { labelFilter }
                        </label>
                        <input 
                            className="border-0 outline-none py-1 w-full"
                            id='search-form'
                            onClick={focusHandler}
                            placeholder="Search"
                        />
                    </div>
                    <SearchFilters />
                    <IconButton 
                        className="bg-cyan-400 text-white"
                        onClick={toggleState}>
                        <SearchIcon />
                    </IconButton>
                </form>
            </div>
            { popoverMemo }
            <IconButton 
                className={classNames( "text-white md:hidden", { "bg-cyan-700 hover:bg-cyan-400": open })} 
                onClick={toggleState}
                ref={searchButtonRef}>
                { open ? <CloseIcon /> : <SearchIcon  /> }
            </IconButton>
        </div>
    );
};

export default Form;