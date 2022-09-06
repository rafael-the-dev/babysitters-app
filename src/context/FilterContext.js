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
            adolescente: false,
            bebe: false,
            crianca: false,
            criancaPreEscolar: false,
            criancaEnsinoBasico: false,
            criancaComNecessidades: false
        }
    });

    const [ verificacoes, setVerificacoes ] = useState({
        avaliacoesReferencias: false,
        documentoDeIdentifcacao: false,
        registoCriminal: false,
        supersitter: false
    })

    return (
        <FilterContext.Provider value={{ experiencia, tipo, verificacoes, setExperiencia, setTipo, setVerificacoes }}>
            { children }
        </FilterContext.Provider>
    );
}