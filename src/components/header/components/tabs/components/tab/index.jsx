import { useContext, useCallback } from "react"
import Button from "@mui/material/Button";
import classNames from "classnames";


import { AppContext } from "src/context";

const Tab = ({ id, icon, label }) => {
    const { babysitter, setBabysitterType } = useContext(AppContext);

    const clickHandler = useCallback(() => setBabysitterType(id), [ id, setBabysitterType ])

    return (
        <Button 
            className={classNames(`border-b border-solid justify-start px-3 rounded-none last:border-0
            `, babysitter.type === id ? "border-cyan-200 text-cyan-700" : "border-neutral-400 text-black" )}
            onClick={clickHandler}
            startIcon={icon}>
            { label }
        </Button>
    );
};

export default Tab;