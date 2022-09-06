import { useCallback, useContext } from "react";
import { FormGroup, Hidden } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import { FilterContext } from "src/context"
import Title from "../title"
import Checkbox from "../checkbox";

const Verificacoes = () => {
    const { verificacoes, setVerificacoes } = useContext(FilterContext);
    const {
        avaliacoesReferencias,
        documentoDeIdentifcacao,
        registoCriminal,
        supersitter
    } = verificacoes;

    const checkboxChangeHandler = useCallback(prop => () => {
        setVerificacoes(verificacoesAtuails => ({
            ...verificacoesAtuails,
            [prop]: !verificacoesAtuails[prop]
        }));
    });

    return (
        <div className={classNames(classes.container, "mt-8 sm:mt-0 sm:rounded-xl sm:px-4 sm:pt-1 sm:pb-6")}>
            <Hidden smUp>
                <Title>Verificações</Title>
            </Hidden>
            <FormGroup className="mt-3">
                <Checkbox 
                    className="sm:items-start"
                    checked={documentoDeIdentifcacao} 
                    label="Documento de identificação" 
                    onChange={checkboxChangeHandler("documentoDeIdentifcacao")} 
                />
                <Checkbox 
                    checked={registoCriminal} 
                    label="Registo criminal" 
                    onChange={checkboxChangeHandler("registoCriminal")} 
                />
                <Checkbox 
                    className="sm:items-start"
                    checked={avaliacoesReferencias} 
                    label="Tem avaliações ou referências"
                    onChange={checkboxChangeHandler("avaliacoesReferencias")}  
                />
                <Checkbox 
                    className="items-start"
                    checked={supersitter} 
                    label={<>
                        Supersitter<br/>
                        <div>
                            Ver babysitters altamente recomendadas
                        </div>
                    </>}
                    onChange={checkboxChangeHandler("supersitter")}  
                />
            </FormGroup>
        </div>
    );
};

export default Verificacoes;