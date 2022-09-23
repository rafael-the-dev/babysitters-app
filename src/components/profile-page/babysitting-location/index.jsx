import { useId } from "react"
import { MenuItem } from "@mui/material";

import Input from "src/components/default-input"
import Label from "../label"

const Container = () => {
    const id = useId();

    const list = [
        "Na casa da família", "Na minha casa", "Sem preferência"
    ];

    return (
        <div className="mt-4">
            <Label
                htmlFor="educacao-input">
                Local de babysitting preferido
            </Label>
            <Input 
                fullWidth
                inputProps={{ id: "educacao-input" }}
                select
            >
                {
                    list.filter(item => ![].includes(item))
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
    );
};

export default Container;