import * as React from "react";

import Chip from "../chip"
import Legend from "../legend"

const Container = () => {
    const list = [
        "Responsável", "Calma", "Divertido", "Entusiasmado", "Desportivo", "Carinhoso", "Criativo", "Paciente",
        "Amigáveis", "Imaginativo", "Conversador", "Empático"
    ];

    const id = React.useId();

    return (
        <fieldset className="mt-4">
            <Legend>Descreva-se em 3 palavras</Legend>
            <div className="flex flex-wrap">
                {
                    list.map((item, index) => (
                        <Chip 
                            key={`${id}${index}`} 
                            label={item} 
                            selected={index === 3 || index === 1 || index === 5}
                        />
                    ))
                }
            </div>
        </fieldset>
    );
};

export default Container;