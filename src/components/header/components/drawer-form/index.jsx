import { useEffect, useRef } from "react";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router"
import classNames from "classnames";

import classes from "./styles.module.css";

import SearchIcon from '@mui/icons-material/Search';

import Link from "src/components/link";
import Drawer from "src/components/drawer";
import Tab from "../user-tab"
import UserLocation from "../user-location"

const DrawerForm = ({ onClose, onOpen }) => {
    const inputRef = useRef(null);
    const openHandler = useRef(null);
    const popoverClose = useRef(null);
    const popoverOpen = useRef(null);

    const focusHandler = (event) => {
        popoverOpen.current?.(event)
    };
<<<<<<< HEAD

    const router = useRouter();

    const submitHandler = (e) => {
        e.preventDefault();

        const { value } = inputRef.current;

        if(value.trim()) {
            router.push("/babysitter")
        }
    };
=======
>>>>>>> c5ce83d (create como-funciona page)

    const router = useRouter();

    const submitHandler = (e) => {
        e.preventDefault();

        const { value } = inputRef.current;

        if(value.trim()) {
            router.push("/babysitter")
        }
    };

    useEffect(() => {
        onOpen.current = openHandler.current;
    }, [ onOpen ]);
    
    return (
        <Drawer 
            anchor="top" 
            onCloseHelper={onClose}
            openHandler={openHandler}>
            <div className={classNames("bg-white flex flex-col items-center py-8")}>
                <div className={classNames("flex items-start")}>
                    <Tab className="text-black" id="EMPLOYERS">
                        Procuro babysitter
                    </Tab>
                    <Tab className="text-black"  id="CANDIDATES">
                        Trabalhos de babysitting
                    </Tab>
                </div>
                <form className={classNames("border border-black border-solid flex items-stretch rounded-3xl py-2 pl-3 pr-1",
                    classes.form)}
                    onSubmit={submitHandler}>
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
                            ref={inputRef}
                            required
                        />
                    </div>
                    <IconButton 
                        className="bg-cyan-400 text-white"
                        type="submit">
                        <SearchIcon />
                    </IconButton>
                    <UserLocation onClick={popoverOpen} onClose={popoverClose} />
                </form>
            </div>
        </Drawer>
    );
};

export default DrawerForm;