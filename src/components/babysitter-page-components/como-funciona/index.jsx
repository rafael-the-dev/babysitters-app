
import { Button, Typography } from "@mui/material";

import Card from "./components/card";
import Link from "src/components/link"

const ComoFuncionaContainer = () => {

    return (
        <section className="flex flex-col items-center py-8 px-5 text-center mb-12">
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
                    icon="https://cdn.babysits.com/content/global/how-it-works/barry-search.webp"
                    list={[ "Verifique os perfis detalhados", "Analise as verificações de confiança de usuários", "Filtre de acordo com suas necessidades", "Encontre uma babysitter em Porto" ]}
                    title="Pesquisar"
                />
                <Card 
                    icon="https://cdn.babysits.com/content/global/how-it-works/barry-connect.webp"
                    list={[ "Use o nosso serviço de mensagens seguras", "Triagem, entrevista e escolha", "Acessível para as famílias"]}
                    title="Contactar"
                />
                <Card 
                    icon="https://cdn.babysits.com/content/global/how-it-works/barry-book.webp"
                    list={[ "Planear e pagar reservas", "Descarregar recibos de declarações de despesas ou impostos" ]}
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