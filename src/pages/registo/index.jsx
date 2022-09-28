import * as React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router"
import dynamic from "next/dynamic";
import jwtDecode from "jwt-decode";
import classNames from "classnames";

import { AppContext } from "src/context"

import Input from "src/components/default-input"
import Link from "src/components/link";
import Separator from "src/components/separator"

import classes from "./styles.module.css";

const FbLogin = dynamic(() => import("src/components/fb-login"), {
    ssr: false
});

const Container = () => {
    const { language } = React.useContext(AppContext);
    const router = useRouter();

    const submitHandler = e => {
        e.preventDefault();

        router.push('/registo/complete');
    };

    const handleCredentialResponse = React.useCallback(res => {
        const user = jwtDecode(res.credential);
        console.log(user)
    }, []);

    React.useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: process.env.GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { size: "large", theme: "outline", width: "100%" }
        )
    }, [ handleCredentialResponse ]);

    return (
        <main>
            <form 
                className={classNames(classes.form, `border border-solid border-gray-300 mx-auto my-12
                px-4 py-6 md:my-16`)}
                onSubmit={submitHandler}>
                <div className="flex flex-col items-center">
                    <div className={classes.googleSignContainer} id="signInDiv"></div>
                    <FbLogin />
                </div>
                <Separator className="my-8">
                    { language === "PORTUGUESE" ? "Ou" : "Or" }
                </Separator>
                <fieldset>
                    <legend 
                        className="block font-bold text-center text-lg">
                        { language === "PORTUGUESE" ? "Bem-vindo à Babysits" : "Welcome to Babysits" }
                    </legend>
                    <div className="mt-8">
                        <Input 
                            fullWidth
                            id="first-name" 
                            label={ language === "PORTUGUESE" ? "Primeiro Nome" : "First name" }
                            required
                            variant="outlined" 
                        />
                        <Input 
                            fullWidth
                            id="last-name" 
                            label={ language === "PORTUGUESE" ? "Apelido": "Last name" }
                            required
                            variant="outlined" 
                        />
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
                            label={ language === "PORTUGUESE" ? "Palavra-passe" : "Password" }
                            required
                            type="password" 
                            variant="outlined" 
                        />
                        <Button
                            className="bg-neutral-800 py-3 text-white w-full hover:bg-neutral-900 hover:opacity-70"
                            type="submit"
                            variant="contained">
                            { language === "PORTUGUESE" ? "Registe-se" : "Sign up" }
                        </Button>
                    </div>
                    <div className="border-t border-solid border-gray-400 flex items-center justify-center mt-8 pt-4">
                        { language === "PORTUGUESE" ? "Já tem uma conta?" : "Already have an account?" }
                        <Link className="font-bold ml-2 text-black underline" href="/iniciar-sessao">
                            { language === "PORTUGUESE" ? "Iniciar sessão" : "Log in" }
                        </Link>
                    </div>
                </fieldset>
            </form>
        </main>
    );
};

export default Container;