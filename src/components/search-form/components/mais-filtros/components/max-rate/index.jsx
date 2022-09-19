import { useCallback, useContext } from "react"

import { FilterContext } from "src/context"

import Title from "../../../title"

const Container = () => {
    const { setTaxaMaximaPorHora } = useContext(FilterContext);

    const inputBlurHandler = useCallback((e) => {
        const { value } = e.target;
        setTaxaMaximaPorHora(parseFloat(value));
    }, [ setTaxaMaximaPorHora ])

    return (
        <div className="border-b border-solid border-gray-300 py-8">
            <Title>Taxa máxima por hora</Title>
            <div className="border border-gray-500 border-solid flex items-stretch mt-3 rounded-lg">
                <label
                    className="bg-slate-200 flex items-center justify-center px-3 rounded-l-lg"
                    htmlFor="hour-rate-input">
                    €
                </label>
                <input 
                    className="border-0 grow outline-none py-3 px-2"
                    id="hour-rate-input"
                    onBlur={inputBlurHandler}
                    type="number"
                />
                <label
                    className="bg-slate-200 flex items-center justify-center px-3 rounded-r-lg"
                    htmlFor="hour-rate-input">
                    /hora
                </label>
            </div>
        </div>
    );
};

export default Container;