import * as React from "react";

import Chip from "../chip"
import Legend from "../legend"

const Container = () => {
    const list = [
        "Desenhar", "Trabalhos manuais", "Ler", "Música", "Línguas", "Jogos"
    ];

    const id = React.useId();

    return (
        <fieldset className="mt-4">
            <Legend>Habilidades</Legend>
            <div className="flex flex-wrap">
                {
                    list.map((item, index) => (
                        <Chip 
                            key={`${id}${index}`} 
                            label={item} 
                            selected={index === 2}
                        />
                    ))
                }
            </div>
        </fieldset>
    );
};

export default Container;