import { Button, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css"

import Input from "src/components/default-input"
import Tabs from "src/components/reference-page/tabs"

const Container = () => {

    return (
        <main>
            <div className="border-b border-gray-300 border-solid px-5 py-3">

            </div>
            <section className={classNames("mx-auto px-5 py-12", classes.container)}>
                <Typography
                    component="h1"
                    className="font-bold text-lg sm:text-xl md:text-2xl">
                    Referências
                </Typography>
                <Tabs />
                <div className="border border-gray-300 border-solid mt-4 p-4">
                    <Typography
                        className='font-medium'>
                        Pode pedir uma referência na sua rede pessoal e esta aparecerá publicamente no seu perfil Babysits para ajudar outros membros a conhecê-lo(a).
                    </Typography>
                </div>
                <div className="border border-gray-300 border-solid mt-4 p-4">
                    <Typography
                        component="h2"
                        className="font-bold  sm:text-lg md:text-xl">
                        A quem deseja pedir uma referência?
                    </Typography>
                    <form className="mt-4">
                        <Input 
                            fullWidth
                            placeholder="Primeiro nome"
                            required
                        />
                        <Typography
                            className='font-medium mt-3'>
                                Babysits baseia-se em confiança e reputação. Só deve pedir referências a pessoas que conhecem bem as suas capacidades e caráter, como os seus amigos, familiares ou famílias/babysitters com quem tenha trabalhado antes.
                        </Typography>
                        <Button
                            className="border border-black border-solid bg-neutral-800 mt-4 normal-case text-white 
                            hover:bg-transparent hover:text-black">
                            Continuar
                        </Button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Container;