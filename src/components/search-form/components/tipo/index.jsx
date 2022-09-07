import { useCallback, useContext } from "react"
import { FormGroup, Hidden } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";

import { FilterContext } from "src/context"
import Title from "../title";
import Checkbox from "../checkbox";


const Tipo = () => {
    const { tipo, setTipo }  = useContext(FilterContext);

    const { ama, babysitter, outraFamilia } = tipo;
    
    const checkboxChangeHandler = useCallback(prop => () => {
        setTipo(tipoAtual => ({ ...tipoAtual, [prop]: !tipoAtual[prop]}))
    }, []);

    return (
        <div className={classNames(classes.container, "sm:rounded-xl sm:px-4 sm:pt-1 sm:pb-6",
        "border-b border-solid border-gray-300 pb-8 pt-4")}>
            <Hidden smUp>
                <Title>Tipo</Title>
            </Hidden>
            <FormGroup className="mt-3">
                <Checkbox 
                    checked={babysitter} 
                    onChange={checkboxChangeHandler("babysitter")} 
                    label="Babysitter" 
                />
                <Checkbox 
                    checked={ama} 
                    onChange={checkboxChangeHandler("ama")} 
                    label="Ama" 
                />
                <Checkbox 
                    className="items-start" 
                    checked={outraFamilia} 
                    onChange={checkboxChangeHandler("outraFamilia")} 
                    label="Outra família (famílias que ajudam famílias)" 
                />
            </FormGroup>
        </div>
    );
};

export default Tipo;