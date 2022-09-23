import * as React from "react"
import { MenuItem } from "@mui/material"

import Input from "src/components/default-input"
import Label from "../label";

const Container = () => {
    const id = React.useId();

    const languagesList = [ "Português", "Inglês" ];
    const gradesList = [ "9 ano", "12º ano", "Licenciatura", "Mestrado", "Pós-graduação" ];

    return (
        <div className="mt-4">
            <div>
                <Label
                    htmlFor="educacao-input">
                    Educação
                </Label>
                <Input 
                    fullWidth
                    inputProps={{ id: "educacao-input" }}
                    select
                >
                    {
                        gradesList.filter(item => ![].includes(item))
                            .map((item, index) => (
                                <MenuItem 
                                    key={`${id}${index}`} 
                                    value={item}>
                                    { item }
                                </MenuItem>
                            )
                        )
                    }
                </Input>
            </div>
            <div className="mt-4">
                <Label
                    htmlFor="linguas-input">
                    Línguas que falo
                </Label>
                <Input 
                    fullWidth
                    id="linguas-input"
                    select
                >
                    {
                        languagesList.filter(item => ![].includes(item))
                            .map((item, index) => (
                                <MenuItem 
                                    key={`${id}${index}`} 
                                    value={item}>
                                    { item }
                                </MenuItem>
                            )
                        )
                    }
                </Input>
            </div>
        </div>
    );
};

export default Container;