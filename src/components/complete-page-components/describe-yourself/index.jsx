import { useCallback, useId, useMemo, useRef, useState } from "react"

import Legend from "../legend-container";
import Button from './components/button';

const Container = () => {
    const [ traits, setTraits ] = useState([]);
    const id = useId();
    const list = useRef([
        "Responsável", "Calma", "Divertido", "Entusiasmado", "Desportivo", "Carinhoso", "Criativo", "Paciente",
        "Amigáveis", "Imaginativo", "Conversador", "Empático"
    ]);

    const legendMemo = useMemo(() => (
        <Legend label="Descreva-se em 3 palavras" />
    ), []);

    const isSelected = useCallback((item) => {
        return traits.includes(item)
    }, [ traits ])

    const addItem = useCallback(prop => () => {
        setTraits(currentList => [ ...new Set([ ...currentList, prop])]);
    }, [])

    const removeItem = useCallback(prop => () => {
        setTraits(currentList => currentList.filter(item => item !== prop));
    }, [])

    return (
        <section className="px-5 py-12">
            <form>
                <fieldset>
                    { legendMemo }
                    { traits.length > 3 && <label
                        className="block leading-6 mt-8 text-red-600 text-center">
                        Selecione exatamente 3 palavras. Para alterar sua escolha, desmarque uma das 
                        palavras que você já selecionou para selecionar outra palavra.
                    </label> }
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