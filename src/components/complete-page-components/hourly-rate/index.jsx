import { useCallback, useMemo, useState } from "react"


import Legend from "../legend-container"

const Container = () => {
    const [ value, setValue ] = useState(0);

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

    const changeHandler = useCallback(e => setValue(e.target.value), [])

    return (
        <form className="pb-16 pt-12">
            <fieldset>
                { legendMemo }
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