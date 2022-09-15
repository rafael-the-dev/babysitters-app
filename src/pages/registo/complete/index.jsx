import { Button, Typography } from "@mui/material"
import classNames from "classnames"

import classes from "./styles.module.css"

import Checkbox from "src/components/search-form/components/checkbox";
import Link from "src/components/link"

const Container = () => {

    return (
        <main>
            <section className={classNames(classes.container, `border border-gray-300 border-solid mx-auto my-12
                py-6 px-4 md:px-8`)}>
                <Typography
                    component="h1"
                    className="font-bold text-xl">
                    Antes de aderir
                </Typography>
                <Typography
                    className="leading-6 mt-4 text-sm sm:text-base">
                    A nossa missão é ajudar famílias e prestadores de cuidados infantis, construindo 
                    uma comunidade de confiança. Isto é efetuado através da criação de normas às 
                    quais esperamos o seu cumprimento pela parte dos nossos membros. Antes de 
                    aderir a Babysits, pedimos-lhe que aceite as nossas normas comunitárias e termos do serviço.
                </Typography>
                <Typography 
                    component="h2"
                    className="font-semibold mt-8 text-lg">
                    Normas comunitárias
                </Typography>
                <div className="flex flex-wrap">
                    <Typography className="mr-2 leading-6 mt-4 text-sm sm:text-base">
                        Aceito, durante interações com membros da comunidade Babysits, tratá-los com 
                        respeito e sem preconceitos. Comunicarei sempre de forma clara e sincera. 
                        Comprometo-me a respeitar os acordos feitos com outros utilizadores na plataforma. 
                    </Typography>
                    <Link className="font-medium text-sm text-black underline  sm:text-base" href="/">
                        Li e compreendi as Normas comunitárias.
                    </Link>
                </div>
                <Typography
                    component="h2"
                    className="font-semibold mt-8 text-lg">
                    Termos do serviço
                </Typography>
                <div className="flex flex-wrap mt-4 text-sm sm:text-base">
                    Também aceito os
                    <Link className="font-medium mx-2 text-sm text-black underline sm:text-base" href="/">
                        Termos e condições
                    </Link>
                    e
                    <Link className="font-medium text-sm text-black underline sm:text-base" href="/">
                        Política de Privacidade.
                    </Link>
                </div>
                <div className="mt-4">
                    <Checkbox 
                        checked={false}
                        label="Quero receber promoções, ofertas especiais e questionários da Babysits."
                    />
                </div>
                <div className="flex mt-8">
                    <Button className="bg-black border-black mr-4 px-4 py-2 text-white hover:bg-neutral-700">Aceitar</Button>
                    <Button 
                        className="border-black px-4 py-2 text-black hover:bg-black hover:border-black hover:text-white"
                        variant="outlined">Rejeitar</Button>
                </div>
            </section>
        </main>
    );
};

export default Container;