import { useId } from "react";
import { FormGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import Checkbox from "../checkbox";

const Container = ({ data, onChange }) => {
    const id = useId();

    const getRows = () => {
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
                            className="font-semibold"
                            key={`${i}${id}`}>
                           { time[i] }
                        </TableCell>
                        {
                            Object.entries(data).map((tuple, index) => {
                                const [ key, values ] = tuple;
                                return (
                                    <TableCell 
                                        align="right"
                                        key={`${index}${id}`}>
                                        <Checkbox 
                                            checked={values[dayTimes[i]]}
                                            onChange={Boolean(onChange) ?? onChange(key, dayTimes[i])} 
                                        />
                                    </TableCell>
                                )
                            })
                        }
                </TableRow>
            );
            
        }
        return rows;
    };

    return (
        <div>
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
                        { getRows() }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Container;