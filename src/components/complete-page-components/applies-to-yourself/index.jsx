import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import classes from "./styles.module.css";

import Legend from "../legend-container";
import Button from '../button'

const Container = ({ onSubmit }) => {
    const [ traits, setTraits ] = useState([]);
    const list = useRef([
        "Tenho um certificado de primeiros socorros", "Tenho carta de condução", "Tenho carro",
        "Sou fumador(a)", "Tenho filhos"
    ]);

    const legendMemo = useMemo(() => (
        <Legend label="O que se aplica a você?" />
    ), []);

    const isSelected = useCallback((item) => {
        return traits.includes(item)
    }, [ traits ])

    const addItem = useCallback(prop => () => {
        setTraits(currentList => [ ...new Set([ ...currentList, prop])]);
    }, [])

    const removeItem = useCallback(prop => () => {
        setTraits(currentList => currentList.filter(item => item !== prop));
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
        <section className="px-5 py-12">
            <form>
                <fieldset>
                    { legendMemo }
                    <div className="flex flex-wrap justify-between mt-8 md:px-28 lg:mt-12">
                        <Button
                            className={classes.button}
                            onClick={isSelected(list.current[0])  ? removeItem(list.current[0]) : addItem(list.current[0])}
                            selected={isSelected(list.current[0])}>
                            { list.current[0] }
                        </Button>
                        <Button
                            className={classes.button}
                            onClick={isSelected(list.current[1]) ? removeItem(list.current[1]) : addItem(list.current[1])}
                            selected={isSelected(list.current[1])}>
                            { list.current[1] }
                        </Button>
                        { isSelected(list.current[1]) && <Button
                            className={classes.button}
                            onClick={isSelected(list.current[2]) ? removeItem(list.current[2]) : addItem(list.current[2])}
                            selected={isSelected(list.current[2])}>
                            { list.current[2] }
                        </Button> }
                        <Button
                            className={classes.button}
                            onClick={isSelected(list.current[3]) ? removeItem(list.current[3]) : addItem(list.current[3])}
                            selected={isSelected(list.current[3])}>
                            { list.current[3] }
                        </Button>
                        <Button
                            className={classes.button}
                            onClick={isSelected(list.current[4]) ? removeItem(list.current[4]) : addItem(list.current[4])}
                            selected={isSelected(list.current[4])}>
                            { list.current[4] }
                        </Button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Container;