import { useState } from "react";

import HelperText from "src/components/helper-text";
import Input from "src/components/default-input";
import Label from "../label"
import Legend from "../legend";

const Container = () => {
    const [ value, setValue ] = useState("Eu amo trabalhar com crianças. Eu tenho 3 anos de experiência de babá, principalmente com bebês e crianças. Também tenho experiência com crianças com necessidades especiais, particularmente, epilepsia. Estou ansioso para cuidar de seus filhos! Você pode entrar em contato comigo se tiver alguma dúvida sobre minha experiência de trabalho com crianças ou minha disponibilidade.");
    
    const changeHandler = () => {};

    return (
        <fieldset>
            <Legend className="md:text-lg lg:text-xl">Sobre min</Legend>
            <div className="mt-4">
                <Label
                    htmlFor="textarea-input">
                    Fale um pouco sobre si para que as famílias possam conhecê-lo.
                </Label>
                <Input 
                    className="mt-3 mb-2"
                    fullWidth
                    id="textarea-input"
                    multiline
                    minRows={6}
                    onChange={changeHandler}
                    value={value}
                />
                <div className="flex justify-between text-xs">
                    <HelperText
                        htmlFor="textarea-input">
                        Comunique apenas através de Babysits, não inclua detalhes de contacto. Mínimo de 200 caracteres.
                    </HelperText>
                </div>
            </div>
        </fieldset>
    );
};

export default Container;