import { useCallback, useId, useMemo, useState } from "react"
import classNames from "classnames";
import { Chip, MenuItem, TextField } from "@mui/material"


import Input from "src/components/default-input";
import Legend from "../legend-container"

const Container = () => {
    const [ educacao, setEducacao ] = useState([]);
    const [ linguas, setLinguas ] = useState([]);
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

    const linguasItemlickHandler = useCallback(prop => () => {
        setLinguas(currentList => [ ...new Set([ ...currentList, prop ])])
    }, []);

    const deleteItem = useCallback((prop, func) => () => {
        func(currentList => currentList.filter(item => item !== prop))
    }, [])

    const educacaoChipsList = useMemo(() => {
        return (
            <div className="flex flex-wrap">
                {
                    educacao.map((item, index) => (
                        <Chip 
                            className="bg-cyan-400 mr-3 mb-3"
                            key={`${id}${index}`} 
                            label={item}
                            onDelete={deleteItem(item, setEducacao)} 
                        />
                    ))
                }
            </div>
        );
    }, [ deleteItem, educacao, id ]);

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
            className="font-semibold mb-3"
            htmlFor="linguas-input">
            Línguas que falo
        </label>
    ), []);
    
    const linguasChipsList = useMemo(() => {
        return (
            <div className="flex flex-wrap">
                {
                    linguas.map((item, index) => (
                        <Chip 
                            className="bg-cyan-400 mr-3 mb-3"
                            key={`${id}${index}`} 
                            label={item}
                            onDelete={deleteItem(item, setLinguas)} 
                        />
                    ))
                }
            </div>
        );
    }, [ deleteItem, id, linguas ]);

    const linguasInputMemo = useMemo(() => {
        const list = [ "Português", "Inglês" ];

        return (
            <Input 
                fullWidth
                id="linguas-input"
                select
            >
                {
                    list.filter(item => !linguas.includes(item))
                        .map((item, index) => (
                            <MenuItem 
                                key={`${id}${index}`} 
                                onClick={linguasItemlickHandler(item)}
                                value={item}>
                                { item }
                            </MenuItem>
                        )
                    )
                }
            </Input>
        )
    }, [ id, linguas, linguasItemlickHandler ]);


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
                        { educacaoChipsList }
                        { educacaoInputMemo }
                    </div>
                    <div className="flex flex-col mt-8">
                        { linguasLabelMemo }
                        { linguasChipsList }
                        { linguasInputMemo }
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Container;