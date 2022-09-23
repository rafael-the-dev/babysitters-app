import { useCallback, useMemo, useRef, useState } from "react"

import Legend from "../legend"

const Container = () => {
    const [ value, setValue ] = useState(0);

    const descriptionMemo = useMemo(() => (
        <div className="leading-6 mt-4 text-sm md:text-base">
            Valor médio pedido por outras babysitters: 6,10 €<br/><br/>
            Pode ser uma boa opção começar com uma taxa mais baixa até obter mais avaliações e 
            construir uma rede de babysitting. Para sua segurança e proteção, receba pagamentos 
            apenas através da Babysits.
        </div>
    ), []);

    const changeHandler = useCallback(e => setValue(e.target.value), []);

    return (
        <fieldset className="mt-8">
            <Legend className="block">
                Qual é a sua taxa horária?
            </Legend>
            <div className="border border-gray-500 border-solid flex items-stretch mt-2 rounded-lg">
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
    );
};

export default Container;