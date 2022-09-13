import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Button, Collapse, IconButton } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import ChildCareIcon from '@mui/icons-material/ChildCare';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PetsIcon from '@mui/icons-material/Pets';

import Popover from "src/components/popover";
import Tab from "./components/tab"

const Container = () => {
    const onOpen = useRef(null);

    const tabs =  useMemo(() => (
        <div className={classNames(classes.buttonsContainer, "flex flex-col items-stretch py-4")}>
            <Tab 
                id="CRIANCAS"
                icon={<ChildCareIcon />}
                label="Crianças"
            />
            <Tab 
                id="CAES"
                icon={<PetsIcon />}
                label="Cães"
            />
        </div>
    ), [])

    const openHandler = useCallback(e => onOpen.current?.(e), []);

    return (
        <div>
            <IconButton onClick={openHandler}>
                <FilterAltIcon />
            </IconButton>
            <Popover onClickRef={onOpen}>
                { tabs }
            </Popover>
        </div>
    );
};

export default Container;