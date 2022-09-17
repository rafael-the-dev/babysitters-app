import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@mui/material";
import classNames from "classnames"

import Legend from "../legend-container";

const Container = ({ onSubmit }) => {
    const [ isVisible, setIsVisible ] = useState(true);

    const legendMemo = useMemo(() => <Legend label="Quem consegue ver este perfil?" />, []);

    const clickHandler = useCallback(prop => () => {
        setIsVisible(prop);
    }, []);

    const submitHandler = useCallback(() => {
        return new Promise((resolve, reject) => {
            resolve("")
        })
    }, [ ]);

    useEffect(() => {
        onSubmit.current = submitHandler;
    }, [ onSubmit, submitHandler ])


    return (
        <fieldset className="py-16">
            { legendMemo }
            <div className="mt-12 md:px-32">
                <Button className={classNames("border-black flex flex-col items-center normal-case px-8 py-4 text-black text-center text-sm",
                { "border-b-4 border-b-cyan-400": isVisible })}
                    onClick={clickHandler(true)}
                    variant="outlined">
                    <span className="font-semibold mb-3 text-base">Todos</span>
                    Utilizadores Babysits, motores de busca públicos e sites de emprego.
                </Button>
                <Button className={classNames("border-black flex flex-col items-center normal-case mt-6 px-8 py-4 text-black text-center text-sm",
                { "border-b-4 border-b-cyan-400": !isVisible })}
                    onClick={clickHandler(false)}
                    variant="outlined">
                    <span className="font-semibold mb-3 text-base">Apenas utilizadores Babysits</span>
                    Apenas utilizadores Babysits. Isto poderá reduzir o número de respostas que obtém.
                </Button>
            </div>
        </fieldset>
    );
};

export default Container;
