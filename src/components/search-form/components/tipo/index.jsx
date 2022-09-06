import { useCallback, useContext } from "react"
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

import { FilterContext } from "src/context"
import Title from "../title";
import Label from "../label"


const Tipo = () => {
    const { tipo, setTipo }  = useContext(FilterContext);

    const { ama, babysitter, outraFamilia } = tipo;
    console.log(tipo)
    const checkboxChangeHandler = useCallback(prop => () => {
        setTipo(tipoAtual => ({ ...tipoAtual, [prop]: !tipoAtual[prop]}))
    }, []);

    return (
        <div>
            <Title>Tipo</Title>
            <FormGroup className="mt-3">
                <FormControlLabel 
                    className="m-0" 
                    control={
                        <Checkbox 
                            className="p-[5px]" 
                            checked={babysitter} 
                            onChange={checkboxChangeHandler("babysitter")} 
                        />
                    } 
                    label="Babysitter" 
                />
                <FormControlLabel 
                    className="m-0" 
                    control={
                        <Checkbox 
                            className="p-[5px]" 
                            checked={ama} 
                            onChange={checkboxChangeHandler("ama")} 
                        />
                    } 
                    label="Ama" 
                />
                <FormControlLabel 
                    className="m-0" 
                    control={
                        <Checkbox 
                            className="p-[5px]" 
                            checked={outraFamilia} 
                            onChange={checkboxChangeHandler("outraFamilia")} />
                        } 
                    label="Outra família (famílias que ajudam famílias)" 
                />
            </FormGroup>
        </div>
    );
};

export default Tipo;