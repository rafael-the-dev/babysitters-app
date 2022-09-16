import { useCallback, useId, useMemo, useRef, useState } from "react"

import Legend from "../legend-container";
import Button from '../button'

const Container = () => {
    const [ location, setLocation ] = useState("Na casa da família");
    const id = useId();
    const list = useRef([
        "Na casa da família", "Na minha casa", "Sem preferência"
    ]);

    const legendMemo = useMemo(() => (
        <Legend label="Qual é o seu local favorito de babá?" />
    ), []);

    const isSelected = useCallback((item) => location === item, [ location ])

    const addItem = useCallback(prop => () => {
        setLocation(prop);
    }, [])

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
                                        onClick={addItem(item)}
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