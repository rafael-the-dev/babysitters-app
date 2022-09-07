import { useCallback, useContext } from "react"
import { FormGroup } from "@mui/material";

import { FilterContext } from "src/context"

import Checkbox from "../checkbox";
import Label from "../label";
import Range from "../range";
import Title from "../title"

const MaisFiltros = () => {
    const { 
        disponibilidade,
        idade,
        informacaoAdicional,
        localBabysitting, 
        setDisponibilidade, setIdade, setInformacaoAdiconal, setLocalBabysitting
    } = useContext(FilterContext);

    const idadeChangeHandler = useCallback(event => setIdade(event.target.value), [ setIdade ]);

    const changeHandler = useCallback((prop, func ) => () => {
        func(properties => ({
            ...properties,
            [prop]: !properties[prop]
        }))
    }, [])

    return (
        <div>
            <div className="border-b border-solid border-gray-300 flex flex-col items-stretch py-8">
                <Label className="" htmlFor="idade-range">
                    { idade } até 95+ anos
                </Label>
                <Range 
                    id="idade-range" 
                    min={14} 
                    max={95}
                    onChange={idadeChangeHandler}
                    value={idade}
                />
            </div>
            <div className="border-b border-solid border-gray-300 py-8">
                <Title className="">
                    Local de babysitting preferido
                </Title>
                <FormGroup className="mt-3">
                    <Checkbox checked={localBabysitting.casaFamilia} onChange={changeHandler("casaFamilia", setLocalBabysitting)} label="Na casa da família" />
                    <Checkbox checked={localBabysitting.casaBabysitter} onChange={changeHandler("casaBabysitter", setLocalBabysitting)} label="Na casa do(a) babysitter" />
                </FormGroup>
            </div>
            <div className="border-b border-solid border-gray-300 py-8">
                <Title className="">
                    Tenho disponibilidade para/Estou à vontade com
                </Title>
                <FormGroup className="mt-3">
                    <Checkbox checked={disponibilidade.animaisEstimacao} onChange={changeHandler("animaisEstimacao", setDisponibilidade)} label="Animais de estimação" />
                    <Checkbox checked={disponibilidade.prepararRefeicoes} onChange={changeHandler("prepararRefeicoes", setDisponibilidade)} label="Preparar refeições" />
                    <Checkbox checked={disponibilidade.lidesDomesticas} onChange={changeHandler("lidesDomesticas", setDisponibilidade)} label="Lides domésticas" />
                    <Checkbox checked={disponibilidade.apoiarTrabalhosCasa} onChange={changeHandler("apoiarTrabalhosCasa", setDisponibilidade)} label="Apoiar com trabalhos de casa" />
                </FormGroup>
            </div>
            <div className="py-8">
                <Title className="">
                    Informação adicional
                </Title>
                <FormGroup className="mt-3">
                    <Checkbox checked={informacaoAdicional.certificadoPrimeirosSocorros} onChange={changeHandler("certificadoPrimeirosSocorros", setInformacaoAdiconal)} label="Certificado de primeiros socorros" />
                    <Checkbox checked={informacaoAdicional.naoFumador} onChange={changeHandler("naoFumador", setInformacaoAdiconal)} label="Não fumador(a)" />
                    <Checkbox checked={informacaoAdicional.temFilhos} onChange={changeHandler("temFilhos", setInformacaoAdiconal)} label="Tem filhos" />
                    <Checkbox checked={informacaoAdicional.temCartaConducao} onChange={changeHandler("temCartaConducao", setInformacaoAdiconal)} label="Tem carta de condução" />
                    <Checkbox checked={informacaoAdicional.temCarro} onChange={changeHandler("temCarro", setInformacaoAdiconal)} label="Tem carro" />
                </FormGroup>
            </div>
        </div>
    );
};

export default MaisFiltros;