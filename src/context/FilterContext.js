import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const FilterContext = createContext();
FilterContext.displayName = 'FilterContext';

const countHelper = (values) => {
    return [ ...new Set(values.filter(item => item))].length;
};

export const FilterContextProvider = ({ children }) => {

    const [ disponibilidade, setDisponibilidade ] = useState({
        animaisEstimacao: false,
        apoiarTrabalhosCasa: false,
        lidesDomesticas: false,
        prepararRefeicoes: false,

    });

    const [ disponibilidadeDiaria, setDisponibilidadeDiaria ] = useState({
        segunda: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        terca: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        quarta: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        quinta: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        sexta: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        sabado: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        domingo: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        }
    })

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
    
    const [ idade, setIdade ] = useState(14);

    const [ informacaoAdicional, setInformacaoAdiconal ] = useState({
        certificadoPrimeirosSocorros: false,
        naoFumador: false,
        temCarro: false,
        temFilhos: false,
        temCartaConducao: false
    });

    const [ localBabysitting, setLocalBabysitting ] = useState({
        casaFamilia: false,
        casaBabysitter: false
    });

    const [ verificacoes, setVerificacoes ] = useState({
        avaliacoesReferencias: false,
        documentoDeIdentifcacao: false,
        registoCriminal: false,
        supersitter: false
    });

    const [ tipo, setTipo ] = useState({
        ama: false,
        babysitter: true,
        outraFamilia: false
    });

    const experienciasSelecionada = useMemo(() => {
        const ano = experiencia.anos > 0 ? 1 : 0; 
        return ano + [ ...new Set(Object.values(experiencia.faixaEtaria).filter(item => item))].length;
    }, [ experiencia ]);

    const maisFiltrosSelecionados = useMemo(() => {
        const disponibilidadeLength = countHelper(Object.values(disponibilidade));
        const idadeSelecionada = idade > 14 ? 1: 0;
        const informacaoAdicionalLength = countHelper(Object.values(informacaoAdicional));
        const localBabysittingLength = countHelper(Object.values(localBabysitting));

        return disponibilidadeLength + idadeSelecionada + informacaoAdicionalLength + localBabysittingLength;
    }, [ disponibilidade, idade, informacaoAdicional, localBabysitting ])

    const tiposSelecionados = useMemo(() => {
        return Object.values(tipo).filter(item => item).length;
    }, [ tipo ])

    const verificacoesSelecionadas = useMemo(() => {
        return Object.values(verificacoes).filter(item => item).length;
    }, [ verificacoes ]);

    const totalCamposSelecionads = useMemo(() => {
        return experienciasSelecionada + tiposSelecionados + verificacoesSelecionadas + maisFiltrosSelecionados;
    }, [ experienciasSelecionada, maisFiltrosSelecionados, tiposSelecionados, verificacoesSelecionadas ])

    return (
        <FilterContext.Provider value={{ 
            disponibilidade, disponibilidadeDiaria, 
            experiencia, 
            experienciasSelecionada, 
            idade,
            informacaoAdicional,
            localBabysitting,
            maisFiltrosSelecionados,
            setDisponibilidade, setDisponibilidadeDiaria, setExperiencia, setIdade, setInformacaoAdiconal, setLocalBabysitting, 
            setTipo, setVerificacoes,
            tipo, 
            totalCamposSelecionads, 
            tiposSelecionados, 
            verificacoes, 
            verificacoesSelecionadas
         }}>
            { children }
        </FilterContext.Provider>
    );
}