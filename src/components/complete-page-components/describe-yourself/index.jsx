import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react"

import Legend from "../legend-container";
import Button from '../button'

const Container = ({ onSubmit }) => {
    const [ traits, setTraits ] = useState([]);
    const [ hasError, setHasError ] = useState(false);

    const id = useId();

    const list = useRef([
        "Responsável", "Calma", "Divertido", "Entusiasmado", "Desportivo", "Carinhoso", "Criativo", "Paciente",
        "Amigáveis", "Imaginativo", "Conversador", "Empático"
    ]);
    const hasErrorRef = useRef(false);

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
    }, []);

    useEffect(() => {
        setHasError(traits.length === 0 || traits.length > 3);
    }, [ traits ]);

    useEffect(() => {
        hasErrorRef.current = hasError;
    }, [ hasError ]);

    const submitHandler = useCallback(() => {
        return new Promise((resolve, reject) => {
            if(hasErrorRef.current) {
                reject("Preencha todos os campos");
                return;
            }

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
                    { (traits.length > 3 || traits.length === 0) && <label
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