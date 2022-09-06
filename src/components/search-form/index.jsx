import { useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import { Button, IconButton } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [ value, setValue ] = useState("");

    const changeHandler = useCallback(event => setValue(event.target.value), []);

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
                variant="outlined">
                filtros
            </Button>
        </form>
    );
};

export default Search;