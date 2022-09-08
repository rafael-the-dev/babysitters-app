
import { Button, Typography } from "@mui/material";

import Card from "./components/card";
import Link from "src/components/link"

const ComoFuncionaContainer = () => {

    return (
        <section className="flex flex-col items-center py-8 px-5 text-center">
            <Typography 
                className="font-bold text-2xl"
                component="h2">
                Como funciona
            </Typography>
            <Typography 
                className="font-medium mt-2 text-gray-500 sm:mt-4"
                component="p">
                Encontre uma babysitter ou trabalho de babá em 3 etapas fáceis
            </Typography>
            <div className="items-stretch justify-between mt-16 md:flex">
                <Card 
                    description="Filtre com base nas suas necessidades e encontre perfis detalhados."
                    title="Pesquisar"
                />
                <Card 
                    description="Envie mensagens, encontre utilizadores e faça uma reunião introdutória."
                    title="Contactar"
                />
                <Card 
                    description="Agende uma marcação, pague ou receba e descarregue recibos de despesas."
                    title="Marcar"
                />
            </div>
            <Link href="/">
                <Button className="bg-neutral-800 normal-case py-2 px-8 rounded-lg text-white hover:bg-black">
                    Inscreva-se gratuitamente
                </Button>
            </Link>
        </section>
    );
};

export default ComoFuncionaContainer;