import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';

export const FilterContext = createContext();
FilterContext.displayName = 'FilterContext';

export const FilterContextProvider = ({ children }) => {
    const [ tipo, setTipo ] = useState({
        ama: false,
        babysitter: true,
        outraFamilia: false
    });

    const [ experiencia, setExperiencia ] = useState({
        anos: 0,
        faixaEtaria: {
            bebe: false,
            crianca: false,
            criancaPreEscolar: false,
            criancaEnsinoBasico: false,
            Adolescente: false
        }
    });

    return (
        <FilterContext.Provider value={{ experiencia, tipo, setExperiencia, setTipo }}>
            { children }
        </FilterContext.Provider>
    );
}