import { useCallback, useId, useMemo, useRef, useState } from "react"

import Legend from "../legend-container";
import Button from '../button'

const Container = () => {
    const [ skills, setSkills ] = useState([]);
    const id = useId();
    const list = useRef([
        "Desenhar", "Ler", "Línguas", "Trabalhos manuais", "Música", "Jogos"
    ]);

    const legendMemo = useMemo(() => (
        <Legend label="Quais são suas habilidades de babá?" />
    ), []);

    const isSelected = useCallback((item) => {
        return skills.includes(item)
    }, [ skills ])

    const addItem = useCallback(prop => () => {
        setSkills(currentList => [ ...new Set([ ...currentList, prop])]);
    }, [])

    const removeItem = useCallback(prop => () => {
        setSkills(currentList => currentList.filter(item => item !== prop));
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