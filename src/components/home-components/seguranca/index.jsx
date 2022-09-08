
import { Typography } from "@mui/material";

import ListItem from "./components/list-item";

const SegurancaContainer = () => {

    return (
        <section className="bg-cyan-200 my-12 py-12 px-5 text-center lg:py-16">
            <Typography 
                className="font-semibold text-2xl"
                component="h2">
                Segurança e transparência são a nossa prioridade
            </Typography>
            <Typography 
                className="font-medium mt-6 text-gray-500"
                component="p">
                Babysits oferece uma plataforma transparente, para que possa ter a certeza de 
                que os seus filhos estão em boas mãos.
            </Typography>
            <ul className="flex-wrap justify-between mt-8 sm:flex sm:mt-12">
                <ListItem text="Avaliações e Referências" url="/icons/02-reviews-references.png" />
                <ListItem text="Documento de identificação" url="/icons/01-id-verification.png" />
                <ListItem text="Registo criminal" url="/icons/24-documents-200px.png" />
                <ListItem text="Pagamentos seguros" url="/icons/06-secure-payments.png" />
                <ListItem text="Acessível para as famílias" url="/icons/affordable.png" />
                <ListItem text="Envio seguro de mensagens" url="/icons/03-secure-messaging.png" />
            </ul>
        </section>
    );
};

export default SegurancaContainer;