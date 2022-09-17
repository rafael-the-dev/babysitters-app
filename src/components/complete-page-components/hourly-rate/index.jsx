import { useCallback, useEffect, useMemo, useRef, useState } from "react"


import Legend from "../legend-container"

const Container = ({ onSubmit }) => {
    const [ value, setValue ] = useState(0);
    const [ hasError, setHasError ] = useState(false);

    const hasErrorRef = useRef(false);

    const legendMemo = useMemo(() => (
        <Legend label="Qual é a sua taxa horária?" />
    ), []);

    const descriptionMemo = useMemo(() => (
        <div className="leading-6 mt-4 text-sm md:text-base">
            Valor médio pedido por outras babysitters: 6,10 €<br/><br/>
            Pode ser uma boa opção começar com uma taxa mais baixa até obter mais avaliações e 
            construir uma rede de babysitting. Para sua segurança e proteção, receba pagamentos 
            apenas através da Babysits.
        </div>
    ), []);

    const changeHandler = useCallback(e => setValue(e.target.value), []);

    useEffect(() => {
        setHasError(!Boolean(parseFloat(value)));
    }, [ value ]);

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
        <form className="pb-16 pt-12">
            <fieldset>
                { legendMemo }
                { hasError && <label
                    className="block leading-6 mt-8 text-red-600 text-center">
                    Por favor preencha todos os campos.
                </label> }
                <div className="border border-gray-500 border-solid flex items-stretch mt-8 md:mt-12 rounded-lg">
                    <label
                        className="bg-slate-200 flex items-center justify-center px-3 rounded-l-lg"
                        htmlFor="hour-rate-input">
                        €
                    </label>
                    <input 
                        className="border-0 grow outline-none py-3 px-2"
                        id="hour-rate-input"
                        onChange={changeHandler}
                        type="number"
                        value={value}
                    />
                    <label
                        className="bg-slate-200 flex items-center justify-center px-3 rounded-r-lg"
                        htmlFor="hour-rate-input">
                        /hora
                    </label>
                </div>
                { descriptionMemo }
            </fieldset>
        </form>
    );
};

export default Container;