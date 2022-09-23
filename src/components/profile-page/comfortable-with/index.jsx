import * as React from "react";

import Chip from "../chip"
import Legend from "../legend"

const Container = () => {
    const list = [
        "Animais de estimação", "Preparar refeições", "Lides domésticas", "Apoiar com trabalhos de casa"
    ];

    const id = React.useId();

    return (
        <fieldset className="mt-4">
            <Legend>Tenho disponibilidade para/Estou à vontade com</Legend>
            <div className="flex flex-wrap">
                {
                    list.map((item, index) => (
                        <Chip 
                            key={`${id}${index}`} 
                            label={item} 
                            selected={index === 3}
                        />
                    ))
                }
            </div>
        </fieldset>
    );
};

export default Container;