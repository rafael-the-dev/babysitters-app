import * as React from "react"
import { Button } from "@mui/material";
import classNames from "classnames";

import Input from "src/components/default-input";
import Link from "src/components/link"

import classes from "./styles.module.css";

const Container = () => {
    const handleCredentialResponse = React.useCallback(response => {
        console.log(response)
    }, []);

    React.useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: process.env.GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { size: "large", theme: "outline" }
        )
    }, [ handleCredentialResponse ]);

    return (
        <main>
            <form className={classNames(classes.form, `border border-solid border-gray-300 mx-auto my-12
                px-4 py-6 md:my-16`)}>
                <div>
                    <div className={classes.googleSignContainer} id="signInDiv"></div>
                </div>
                <fieldset>
                    <legend 
                        className="font-bold text-lg">
                        Iniciar sessão
                    </legend>
                    <div className="mt-8">
                        <Input 
                            fullWidth
                            id="e-mail" 
                            label="E-mail"
                            required
                            type="email" 
                            variant="outlined" 
                        />
                        <Input 
                            fullWidth
                            id="password" 
                            label="Palavra-passe"
                            required
                            type="password" 
                            variant="outlined" 
                        />
                        <Button
                            className="bg-neutral-800 py-3 text-white w-full hover:bg-neutral-900 hover:opacity-70"
                            type="submit"
                            variant="contained">
                            Iniciar sessão
                        </Button>
                        <Link 
                            className="block font-medium mt-4 text-black text-center underline" 
                            href="recuperar-palavra-passe">
                            Esqueceu-se da sua palavra-passe?
                        </Link>
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