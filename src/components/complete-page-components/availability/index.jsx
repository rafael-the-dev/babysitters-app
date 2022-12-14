import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

import Checkbox from "src/components/checkbox";
import Legend from "../legend-container"

const Container = ({ onSubmit }) => {
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
    const [ hasError, setHasError ] = useState(false);

    const hasErrorRef = useRef(false)
    const id = useId();

    const legendMemo = useMemo(() => (
        <Legend label="Qual é a sua disponibilidade?" />
    ), []);

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

        for(let i = 0; i < 4; i++) {
            rows.push(
                <TableRow
                    key={`${i}${id}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell 
                            className="font-semibold"
                            key={`${i}${id}`}>
                           { time[i] }
                        </TableCell>
                        {
                            Object.entries(disponibilidadeDiaria).map((tuple, index) => {
                                const [ key, values ] = tuple;
                                return (
                                    <TableCell 
                                        align="center"
                                        key={`${index}${id}`}>
                                        <Checkbox 
                                            checked={Object.values(values)[i]}
                                            onChange={disponibilidadeDiariaChangeHandler(key, Object.keys(values)[i])} 
                                        />
                                    </TableCell>
                                )
                            })
                        }
                </TableRow>
            );
            
        }
        return rows;
    }, [ disponibilidadeDiaria, disponibilidadeDiariaChangeHandler, id ]);

    useEffect(() => {
        const hasErrorTemp = true;
        Object.values(disponibilidadeDiaria).forEach(item => {
            if([ ...new Set(Object.values(item))].includes(true)) {
                hasErrorTemp = false;
            }
        })
        setHasError(hasErrorTemp);
    }, [ disponibilidadeDiaria ]);

    useEffect(() => {
        hasErrorRef.current = hasError;
    }, [ hasError ]);

    const submitHandler = useCallback(() => {
        return new Promise((resolve, reject) => {
            if(hasErrorRef.current) {
                reject("Preencha todos os campos");
                return;
            }

            resolve("")
        })
    }, [ ]);

    useEffect(() => {
        onSubmit.current = submitHandler;
    }, [ onSubmit, submitHandler ])

    return (
        <form className="pb-16 pt-12">
            <fieldset>
                { legendMemo }
                { hasError && <label
                    className="block leading-6 mt-8 text-red-600 text-center">
                    Por favor selecione sua disponibilidade.
                </label> }
                <TableContainer className="mt-8 md:mt-12" >
                    <Table sx={{ minWidth: 200 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">2ª</TableCell>
                                <TableCell align="center">3ª</TableCell>
                                <TableCell align="center">4ª</TableCell>
                                <TableCell align="center">5ª</TableCell>
                                <TableCell align="center">6ª</TableCell>
                                <TableCell align="center">Sá</TableCell>
                                <TableCell align="center">Do</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { tableBodyMemo }
                        </TableBody>
                    </Table>
                </TableContainer>
            </fieldset>
        </form>
    );
};

export default Container;