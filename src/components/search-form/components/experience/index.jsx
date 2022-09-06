import { useCallback, useContext } from "react"
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

import { FilterContext } from "src/context"
import Title from "../title";
import Label from "../label"

const FiltersContainer = () => {
    const { experiencia, setExperiencia }  = useContext(FilterContext);

    const { anos, faixaEtaria } = experiencia;
    const {
        bebe,
        crianca,
        criancaPreEscolar,
        criancaEnsinoBasico,
        Adolescente
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
        <div className="mt-8">
            <div className="flex flex-col items-stretch">
                <Title>Experiência</Title>
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
            <div className="mt-6">
                <Title>Experiência com a faixa etária</Title>
                <FormGroup className="mt-3">
                    <FormControlLabel className="m-0" control={<Checkbox className="p-[5px]" checked={bebe} onChange={checkboxChangeHandler("bebe")} />} label="Bebé" />
                    <FormControlLabel className="m-0" control={<Checkbox className="p-[5px]" checked={crianca} onChange={checkboxChangeHandler("crianca")} />} label="Criança (Creche)" />
                    <FormControlLabel className="m-0" control={<Checkbox className="p-[5px]" checked={criancaPreEscolar} onChange={checkboxChangeHandler("criancaPreEscolar")} />} label="Criança (Pré-escolar)" />
                    <FormControlLabel className="m-0" control={<Checkbox className="p-[5px]" checked={criancaEnsinoBasico} onChange={checkboxChangeHandler("criancaEnsinoBasico")} />} label="Criança (Ensino Básico)" />
                    <FormControlLabel className="m-0" control={<Checkbox className="p-[5px]" checked={Adolescente} onChange={checkboxChangeHandler("Adolescente")} />} label="Adolescente" />
                </FormGroup>
            </div>
        </div>
    );
};

export default FiltersContainer;