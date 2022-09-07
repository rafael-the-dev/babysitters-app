import { useCallback, useContext } from "react"
import { FormGroup, Hidden } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import { FilterContext } from "src/context"
import Title from "../title";
import Label from "../label";
import Checkbox from "../checkbox"

const FiltersContainer = () => {
    const { experiencia, setExperiencia }  = useContext(FilterContext);

    const { anos, faixaEtaria } = experiencia;
    const {
        adolescente,
        bebe,
        crianca,
        criancaPreEscolar,
        criancaEnsinoBasico,
        criancaComNecessidades
    } = faixaEtaria;

    const rangeChangeHandler = useCallback((event) => {
        setExperiencia(experiencia => ({ ...experiencia, anos: event.target.value }))
    }, []);

    const checkboxChangeHandler = useCallback(prop => () => {
        setExperiencia(experienciaAtual => ({ ...experienciaAtual, faixaEtaria: {
            ...experienciaAtual.faixaEtaria,
            [prop]: !experienciaAtual.faixaEtaria[prop]
        } }))
    }, []);

    return (
        <div className={classNames(classes.container, "mt-8 sm:mt-0 sm:rounded-xl sm:px-4 sm:pt-2 sm:pb-6")}>
            <div className="border-b border-solid border-gray-300 pb-8 flex flex-col items-stretch">
                <Hidden smUp><Title>Experiência</Title></Hidden>
                <Label className="my-2" htmlFor="experience-range">
                    { anos } até 11+ anos
                </Label>
                <input 
                    className=""
                    id="experience-range" 
                    min="0" 
                    max="11" 
                    onChange={rangeChangeHandler}
                    type="range" 
                    value={anos}
                />
            </div>
            <div className="mt-8">
                <Title>Experiência com a faixa etária</Title>
                <FormGroup className="mt-3">
                    <Checkbox checked={bebe} onChange={checkboxChangeHandler("bebe")} label="Bebé" />
                    <Checkbox checked={crianca} onChange={checkboxChangeHandler("crianca")} label="Criança (Creche)" />
                    <Checkbox checked={criancaPreEscolar} onChange={checkboxChangeHandler("criancaPreEscolar")} label="Criança (Pré-escolar)" />
                    <Checkbox checked={criancaEnsinoBasico} onChange={checkboxChangeHandler("criancaEnsinoBasico")} label="Criança (Ensino Básico)" />
                    <Checkbox checked={adolescente} onChange={checkboxChangeHandler("adolescente")} label="Adolescente" />
                    <div className="border-y border-solid border-gray-300 mt-6 py-6 sm:border-b-0 sm:pb-1">
                        <Checkbox 
                            className="items-start"
                            checked={criancaComNecessidades} 
                            label={<>
                                Experiência com crianças com necessidades especiais<br/>
                                <div>
                                    Ver babysitters certificadas para cuidar de crianças com necessidades especiais
                                </div>
                            </>} 
                            onChange={checkboxChangeHandler("criancaComNecessidades")} 
                        />
                    </div>
                </FormGroup>
            </div>
        </div>
    );
};

export default FiltersContainer;