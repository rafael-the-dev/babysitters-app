import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';

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
    });

    const experienciasSelecionada = useMemo(() => {
        const ano = experiencia.anos > 0 ? 1 : 0; 
        return ano + [ ...new Set(Object.values(experiencia.faixaEtaria).filter(item => item))].length;
    }, [ experiencia ])

    const tiposSelecionados = useMemo(() => {
        return Object.values(tipo).filter(item => item).length;
    }, [ tipo ])

    const verificacoesSelecionadas = useMemo(() => {
        return Object.values(verificacoes).filter(item => item).length;
    }, [ verificacoes ]);

    const totalCamposSelecionads = useMemo(() => {
        return experienciasSelecionada + tiposSelecionados + verificacoesSelecionadas;
    }, [ experienciasSelecionada, tiposSelecionados, verificacoesSelecionadas ])

    return (
        <FilterContext.Provider value={{ experiencia, experienciasSelecionada, tipo, totalCamposSelecionads, tiposSelecionados, verificacoes, verificacoesSelecionadas, 
            setExperiencia, setTipo, setVerificacoes }}>
            { children }
        </FilterContext.Provider>
    );
}