import { useCallback, useId, useMemo, useState } from "react"
import classNames from "classnames";
import { MenuItem, TextField } from "@mui/material"


import Input from "src/components/default-input";
import Legend from "../legend-container"

const Container = () => {
    const [ educacao, setEducacao ] = useState([]);
    const id = useId();

    const legendMemo = useMemo(() => (
        <Legend label="Conte-nos mais sobre você" />
    ), []);

    const educacaoLabelMemo = useMemo(() => (
        <label
            className="font-semibold mb-3"
            htmlFor="educacao-input">
            Educação
        </label>
    ), []);

    const educacaoItemlickHandler = useCallback(prop => () => {
        setEducacao(currentList => [ ...new Set([ ...currentList, prop ])])
    }, [])

    const educacaoInputMemo = useMemo(() => {
        const list = [ "9 ano", "12º ano", "Licenciatura", "Mestrado", "Pós-graduação" ];

        return (
            <Input 
                fullWidth
                id="educacao-input"
                select
            >
                {
                    list.filter(item => !educacao.includes(item))
                        .map((item, index) => (
                            <MenuItem 
                                key={`${id}${index}`} 
                                onClick={educacaoItemlickHandler(item)}
                                value={item}>
                                { item }
                            </MenuItem>
                        )
                    )
                }
            </Input>
        )
    }, [ educacao, educacaoItemlickHandler, id ]);

    const linguasLabelMemo = useMemo(() => (
        <label
            className="font-semibold"
            htmlFor="birth-date">
            Línguas que falo
        </label>
    ), [])


    const handleDateChange = useCallback((newValue) => {
        setDate(newValue);
    }, []);

    return (
        <section className="px-5 py-12">
            <form>
                <fieldset>
                    { legendMemo }
                    <div className="flex flex-col mt-8">
                        { educacaoLabelMemo }
                        { educacaoInputMemo }
                    </div>
                    <div className="flex flex-col mt-8">
                        { linguasLabelMemo }
                        
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Container;