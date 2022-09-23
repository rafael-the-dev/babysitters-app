import * as React from "react";

import Chip from "../chip"
import Legend from "../legend"

const Container = () => {
    const list = [
        "Tenho um certificado de primeiros socorros", "Tenho carta de condução", "Sou fumador(a)", "Tenho filhos"
    ];

    const id = React.useId();

    return (
        <fieldset>
            <Legend>O que se aplica a você?</Legend>
            <div className="flex flex-wrap">
                {
                    list.map((item, index) => (
                        <Chip 
                            key={`${id}${index}`} 
                            label={item} 
                            selected={index === 0}
                        />
                    ))
                }
            </div>
        </fieldset>
    );
};

export default Container;