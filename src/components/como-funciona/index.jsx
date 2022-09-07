
import { Typography } from "@mui/material";

import Card from "./components/card"

const ComoFuncionaContainer = () => {

    return (
        <section className="py-8 px-5 text-center">
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
        </section>
    );
};

export default ComoFuncionaContainer;