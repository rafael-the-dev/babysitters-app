
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles"
import classNames from "classnames";

import classes from "./styles.module.css";

const Input = styled(TextField)({
    '&': {
        marginBottom: "1rem"
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: 0
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#00748f"
    }
});

const Container = () => {

    return (
        <main>
            <form className={classNames(classes.form, `border border-solid border-gray-300 mx-auto my-12
                px-4 py-6`)}>
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
                            className="bg-neutral-800 py-3 text-white w-full"
                            type="submit"
                            variant="contained">
                            Registe-se
                        </Button>
                    </div>
                </fieldset>
            </form>
        </main>
    );
};

export default Container;