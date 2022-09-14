
import { Button } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";

import Input from "src/components/default-input"
import Link from "src/components/link"


const Container = () => {

    return (
        <main>
            <form className={classNames(classes.form, `border border-solid border-gray-300 mx-auto my-12
                px-4 py-6 md:my-16`)}>
                <fieldset>
                    <legend 
                        className="font-bold text-lg">
                        Esqueceu-se da sua palavra-passe?
                    </legend>
                    <div className="mt-8">
                        <label
                            className="block mb-4"
                            htmlFor="e-mail">
                            Introduza o endereço de e-mail ligado à sua conta e nós enviaremos-lhe um 
                            link para redefinir a sua palavra-passe.
                        </label>
                        <Input 
                            fullWidth
                            id="e-mail" 
                            label="E-mail"
                            required
                            type="email" 
                            variant="outlined" 
                        />
                        <Button
                            className="bg-neutral-800 py-3 text-white w-full hover:bg-neutral-900 hover:opacity-70"
                            type="submit"
                            variant="contained">
                            Enviar link de redefinição
                        </Button>
                    </div>
                    <div className="border-t border-solid border-gray-400 flex items-center justify-center mt-4 pt-4">
                        Não tem uma conta? 
                        <Link className="font-bold ml-2 text-black underline" href="registo">Registe-se</Link>
                    </div>
                </fieldset>
            </form>
        </main>
    );
};

export default Container;