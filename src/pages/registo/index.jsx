import { Button } from "@mui/material";
import { useRouter } from "next/router"
import classNames from "classnames";

import Input from "src/components/default-input"
import Link from "src/components/link"

import classes from "./styles.module.css";

const Container = () => {
    const router = useRouter();

    const submitHandler = e => {
        e.preventDefault();

        router.push('/registo/complete');
    };

    return (
        <main>
            <form 
                className={classNames(classes.form, `border border-solid border-gray-300 mx-auto my-12
                px-4 py-6 md:my-16`)}
                onSubmit={submitHandler}>
                <fieldset>
                    <legend 
                        className="font-bold text-lg">
                        Bem-vindo à Babysits
                    </legend>
                    <div className="mt-8">
                        <Input 
                            fullWidth
                            id="first-name" 
                            label="Primeiro Nome"
                            required
                            variant="outlined" 
                        />
                        <Input 
                            fullWidth
                            id="last-name" 
                            label="Apelido"
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
                            label="Palavra-passe"
                            required
                            type="password" 
                            variant="outlined" 
                        />
                        <Button
                            className="bg-neutral-800 py-3 text-white w-full hover:bg-neutral-900 hover:opacity-70"
                            type="submit"
                            variant="contained">
                            Registe-se
                        </Button>
                    </div>
                    <div className="border-t border-solid border-gray-400 flex items-center justify-center mt-8 pt-4">
                        Já tem uma conta?
                        <Link className="font-bold ml-2 text-black underline" href="iniciar-sessao">Iniciar sessão</Link>
                    </div>
                </fieldset>
            </form>
        </main>
    );
};

export default Container;