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

    const disponibilidadeQueryString = useMemo(() => {
        const { animaisEstimacao, apoiarTrabalhosCasa, lidesDomesticas, prepararRefeicoes } = disponibilidade;

        const cooking = prepararRefeicoes ? "cooking=true" : "";
        const chores = lidesDomesticas ? "chores=true" : "";
        const homework_assistance = apoiarTrabalhosCasa ? "homework_assistance=true" : "";
        const pets = animaisEstimacao ? "pets=true" : "";

        return `${cooking}&${chores}&${homework_assistance}&${pets}`;
    }, [ disponibilidade ])

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
    });

    const disponibilidadeDiariaQueryString = useMemo(() => {
        let queries = "";
        const week = [ "mo", "tu", "we", "th", "fr", "sa", "su" ];
        const times = {
            fimDaTarte: 3,
            manha: 1,
            tarde: 2,
            noite: 4
        }

        Object.values(disponibilidadeDiaria).forEach((item, index) => {
            Object.entries(item).forEach(tuple => {
                if(tuple[1]) {
                    queries += `${week[index]}${times[tuple[0]]}=true&`;
                }
            })
        });

        return queries.replace(/&$/g, "");
    }, [ disponibilidadeDiaria ])

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

    const experienciaQueryString = useMemo(() => {
        const { anos, faixaEtaria: { adolescente, bebe, crianca, criancaPreEscolar, criancaEnsinoBasico, criancaComNecessidades } } = experiencia;
        const min_experience = anos > 0 ? `min_experience=${anos}` : "";

        const baby = bebe ? `age_groups=baby` : "";
        const toddler = crianca ? `age_groups=toddler` : "";
        const preSchooler = criancaPreEscolar ? `age_groups=preschooler` : "";
        const gradeSchooler = criancaEnsinoBasico ? `age_groups=gradeschooler` : "";
        const teenager = adolescente ? `age_groups=teenager` : "";
        const specialNeeds = criancaComNecessidades ? `special_needs=true` : "";

        return `${min_experience}&${baby}&${toddler}&${preSchooler}&${gradeSchooler}&${teenager}&${specialNeeds}`;

    }, [ experiencia ])
    
    const [ idade, setIdade ] = useState(14);

    const idadeQueryString = useMemo(() => idade > 14 ? `min_age=${idade}` : "", [ idade ])

    const [ informacaoAdicional, setInformacaoAdiconal ] = useState({
        certificadoPrimeirosSocorros: false,
        naoFumador: false,
        temCarro: false,
        temFilhos: false,
        temCartaConducao: false
    });

    const informacaoAdicionalQueryString = useMemo(() => {
        const { certificadoPrimeirosSocorros, naoFumador, temCarro, temFilhos, temCartaConducao } = informacaoAdicional;
        
        const car = temCarro ? "car=true" : "";
        const children = temFilhos ? "children=true" : "";
        const driving_license = temCartaConducao ? "driving_license=true" : "";
        const first_aid = certificadoPrimeirosSocorros ? "first_aid=true" : "";
        const smoking = naoFumador ? "smoking=false" : "";

        return `${car}&${children}&${driving_license}&${first_aid}&${smoking}`;
    }, [ informacaoAdicional ])

    const [ localBabysitting, setLocalBabysitting ] = useState({
        casaFamilia: false,
        casaBabysitter: false
    });

    const localBabysittingQueryString = useMemo(() => {
        const { casaBabysitter, casaFamilia } = localBabysitting;

        return `${ casaBabysitter ? "babysit_location=at_consumer" : ""}&${casaFamilia ? "babysit_location=at_provider": ""}`;
    }, [ localBabysitting ])

    const [ verificacoes, setVerificacoes ] = useState({
        avaliacoesReferencias: false,
        documentoDeIdentifcacao: false,
        registoCriminal: false,
        supersitter: false
    });

    const verificacoesQueryString = useMemo(() => {
        const { avaliacoesReferencias, documentoDeIdentifcacao, registoCriminal, supersitter } = verificacoes;

        const reviews_references = avaliacoesReferencias ? `reviews_references=true` : "";
        const identity_verified = documentoDeIdentifcacao ? `identity_verified=true` : "";
        const documents = registoCriminal ? `documents=pt_registo_criminal` : "";
        const isSupersitter = supersitter ? `supersitter=true` : "";

        return `${reviews_references}&${identity_verified}&${documents}&${isSupersitter}`;
    }, [ verificacoes ])

    const [ tipo, setTipo ] = useState({
        ama: false,
        babysitter: true,
        outraFamilia: false
    });

    const tipoQueryString = useMemo(() => {
        const { ama, babysitter, outraFamilia } = tipo;

        const isAma = ama ? "user_type=childminder" : "";
        const isBabysitter = babysitter ? "user_type=babysitter" : "";
        const isOutraFamilia = outraFamilia ? "user_type=parent&type_babysit=parents_help_parents" : "";

        return `${isAma}&${isBabysitter}&${isOutraFamilia}`;
    }, [ tipo ])

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

    const queriesStringParams = useMemo(() => {
        return `${disponibilidadeQueryString}&${disponibilidadeDiariaQueryString}&${experienciaQueryString}&${idadeQueryString}&${informacaoAdicionalQueryString}&${localBabysittingQueryString}&${verificacoesQueryString}&${tipoQueryString}`.replace(/&{2,}/g, "&").replace(/&$/g, "").replace(/^&/g, "");
    }, [ disponibilidadeQueryString, disponibilidadeDiariaQueryString, experienciaQueryString, idadeQueryString,
        informacaoAdicionalQueryString, localBabysittingQueryString, verificacoesQueryString, tipoQueryString ]);
        console.log(queriesStringParams)
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