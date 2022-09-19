import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { FilterContext } from "src/context"

export const useQuery = () => {
    const { 
        setDisponibilidade, 
        setExperiencia, 
        setIdade, 
        setInformacaoAdiconal 
    } = useContext(FilterContext);

    const { query: {
        age_groups,
        children, cooking, chores, car,
        driving_license,
        first_aid,
        homework_assistance,
        min_experience, min_age,
        pets,
        smoking, special_needs
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
        const checkAgeGroup = (item) => {
            if(typeof age_groups === "string") {
                return age_groups === item;
            } 
            else if (Array.isArray(age_groups)) {
                return age_groups.includes(item);
            }

            return false;
        };

        setExperiencia({
            anos: min_experience ? parseInt(min_experience) : 0,
            faixaEtaria: {
                adolescente: checkAgeGroup("teenager"),
                bebe: checkAgeGroup("baby"),
                crianca: checkAgeGroup("toddler"),
                criancaPreEscolar: checkAgeGroup("preschooler"),
                criancaEnsinoBasico: checkAgeGroup("gradeschooler"),
                criancaComNecessidades: Boolean(special_needs)
            }
        })
    }, [ age_groups, min_experience, special_needs, setExperiencia ]);

    useEffect(() => setIdade(parseInt(min_age ?? 14)), [ min_age, setIdade ]);

    useEffect(() => {
        console.log(typeof car)
        setInformacaoAdiconal({
            certificadoPrimeirosSocorros: Boolean(first_aid ?? false),
            naoFumador:  Boolean(smoking ?? false),
            temCarro:  Boolean(car ?? false),
            temFilhos:  Boolean(children ?? false),
            temCartaConducao:  Boolean(driving_license ?? false)
        });
    }, [ car, children, driving_license, first_aid, smoking, setInformacaoAdiconal ])
};