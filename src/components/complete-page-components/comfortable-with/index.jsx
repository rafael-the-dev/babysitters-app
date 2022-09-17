import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react"

import Legend from "../legend-container";
import Button from '../button'

const Container = ({ onSubmit }) => {
    const [ comfortableWith, setComfortableWith ] = useState([]);
    const id = useId();
    const list = useRef([
        "Animais de estimação", "Preparar refeições", "Lides domésticas", "Apoiar com trabalhos de casa"
    ]);

    const legendMemo = useMemo(() => (
        <Legend label="Com o que você se sente confortável?" />
    ), []);

    const isSelected = useCallback((item) => {
        return comfortableWith.includes(item)
    }, [ comfortableWith ])

    const addItem = useCallback(prop => () => {
        setComfortableWith(currentList => [ ...new Set([ ...currentList, prop])]);
    }, [])

    const removeItem = useCallback(prop => () => {
        setComfortableWith(currentList => currentList.filter(item => item !== prop));
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
                    <div className="flex flex-wrap justify-between mt-8 lg:mt-12">
                        {
                            list.current.map((item, index) => {
                                const selected = isSelected(item);
                                return (
                                    <Button
                                        key={`${id}${index}`}
                                        onClick={selected ? removeItem(item) : addItem(item)}
                                        selected={selected}>
                                        { item }
                                    </Button>
                                )
                            })
                        }
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Container;