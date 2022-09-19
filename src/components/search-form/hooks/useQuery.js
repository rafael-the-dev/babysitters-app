import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { FilterContext } from "src/context";

const hasElement = (item, data) => {
    if(typeof data === "string") {
        return data === item;
    } 
    else if (Array.isArray(data)) {
        return data.includes(item);
    }

    return false;
};

export const useQuery = () => {
    const { 
        setDisponibilidade, 
        setExperiencia, 
        setIdade, 
        setInformacaoAdiconal ,
        setLocalBabysitting,
        setVerificacoes, 
        setTipo, setTaxaMaximaPorHora
    } = useContext(FilterContext);

    const { query: {
        age_groups,
        babysit_location,
        children, cooking, chores, car,
        driving_license, documents,
        first_aid,
        homework_assistance,
        identity_verified,
        min_experience, min_age, max_rate_amount,
        pets,
        reviews_references,
        smoking, supersitter, special_needs,
        user_type
    }} = useRouter();
    
    useEffect(() => {
        setDisponibilidade({
            animaisEstimacao: Boolean(pets),
            apoiarTrabalhosCasa: Boolean(homework_assistance),
            lidesDomesticas: Boolean(chores),
            prepararRefeicoes: Boolean(cooking),
        });
    }, [ chores, cooking, homework_assistance, pets, setDisponibilidade ]);

    useEffect(() => {
        setExperiencia({
            anos: min_experience ? parseInt(min_experience) : 0,
            faixaEtaria: {
                adolescente: hasElement("teenager", age_groups),
                bebe: hasElement("baby", age_groups),
                crianca: hasElement("toddler", age_groups),
                criancaPreEscolar: hasElement("preschooler", age_groups),
                criancaEnsinoBasico: hasElement("gradeschooler", age_groups),
                criancaComNecessidades: Boolean(special_needs)
            }
        })
    }, [ age_groups, min_experience, special_needs, setExperiencia ]);

    useEffect(() => setIdade(parseInt(min_age ?? 14)), [ min_age, setIdade ]);

    useEffect(() => {
        setInformacaoAdiconal({
            certificadoPrimeirosSocorros: Boolean(first_aid ?? false),
            naoFumador:  Boolean(smoking ?? false),
            temCarro:  Boolean(car ?? false),
            temFilhos:  Boolean(children ?? false),
            temCartaConducao:  Boolean(driving_license ?? false)
        });
    }, [ car, children, driving_license, first_aid, smoking, setInformacaoAdiconal ]);

    useEffect(() => {
        setLocalBabysitting({
            casaFamilia: hasElement("at_consumer", babysit_location),
            casaBabysitter: hasElement("at_provider", babysit_location)
        });
    }, [ babysit_location, setLocalBabysitting ]);

    useEffect(() => {
        setVerificacoes({
            avaliacoesReferencias: Boolean(reviews_references ?? false),
            documentoDeIdentifcacao: Boolean(identity_verified ?? false),
            registoCriminal: documents === "pt_registo_criminal",
            supersitter: Boolean(supersitter ?? false)
        });
    }, [ documents, identity_verified, reviews_references, supersitter, setVerificacoes ]);

    useEffect(() => {
        setTipo({
            ama:hasElement("childminder", user_type),
            babysitter: hasElement("babysitter", user_type),
            outraFamilia:hasElement("parent", user_type)
        });
    }, [ setTipo, user_type ]);

    useEffect(() => setTaxaMaximaPorHora(parseFloat(max_rate_amount ?? 0)), [ max_rate_amount, setTaxaMaximaPorHora ])
};