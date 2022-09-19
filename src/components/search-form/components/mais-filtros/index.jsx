import { useCallback, useContext, useId, useMemo } from "react"
import { FormGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { FilterContext } from "src/context"

import Checkbox from "../checkbox";
import Label from "../label";
import Range from "../range";
import Title from "../title"

const MaisFiltros = () => {
    const { 
        disponibilidade, disponibilidadeDiaria,
        idade,
        informacaoAdicional,
        localBabysitting, 
        setDisponibilidade, setDisponibilidadeDiaria, setIdade, setInformacaoAdiconal, setLocalBabysitting
    } = useContext(FilterContext);

    const id = useId();

    const disponibilidadeDiariaChangeHandler = useCallback((key, value) => () => {
        setDisponibilidadeDiaria(props => ({
            ...props,
            [key]: {
                ...props[key],
                [value]: !props[key][value]
            }
        }))
    }, [ setDisponibilidadeDiaria ]);

    const tableBodyMemo = useMemo(() => {
        const rows = [];
        const time = [ "Manhã", "Tarde", "Fim da tarde", "Noite" ];
        const dayTimes = {
            0: "manha",
            1: "tarde",
            2: "fimDaTarte",
            3: "noite"
        }

        for(let i = 0; i < 4; i++) {
            rows.push(
                <TableRow
                    key={`${i}${id}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell 
                            key={`${i}${id}`}>
                           { time[i] }
                        </TableCell>
                        {
                            Object.entries(disponibilidadeDiaria).map((tuple, index) => {
                                const [ key, values ] = tuple;
                                return (
                                    <TableCell 
                                        align="right"
                                        key={`${index}${id}`}>
                                        <Checkbox 
                                            checked={values[dayTimes[i]]}
                                            onChange={disponibilidadeDiariaChangeHandler(key, dayTimes[i])} 
                                        />
                                    </TableCell>
                                )
                            })
                        }
                </TableRow>
            );
            
        }
        return rows;
    }, [ disponibilidadeDiaria, disponibilidadeDiariaChangeHandler, id ])

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
                <Title className="mb-4">
                    Disponibilidade
                </Title>
                <TableContainer >
                    <Table sx={{ minWidth: 200 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right">2ª</TableCell>
                                <TableCell align="right">3ª</TableCell>
                                <TableCell align="right">4ª</TableCell>
                                <TableCell align="right">5ª</TableCell>
                                <TableCell align="right">6ª</TableCell>
                                <TableCell align="right">Sá</TableCell>
                                <TableCell align="right">Do</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { tableBodyMemo }
                        </TableBody>
                    </Table>
                </TableContainer>
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