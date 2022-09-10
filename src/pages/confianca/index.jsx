import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import DefaultHero from "src/components/default-hero";
import Card from "src/components/confianca-card"

const Container = () => {

    return (
        <main>
            <DefaultHero className={classes.hero}>
                <Typography
                    component="h1"
                    className="font-bold text-center text-xl text-white sm:text-2xl lg:text-3xl">
                    Resulta porque há confiança
                </Typography>
            </DefaultHero>
            <section className="px-5 py-12">
                <Typography
                    component="h2"
                    className="font-semibold text-lg sm:text-xl lg:text-2xl">
                    O que pode fazer para tornar a sua experiência segura
                </Typography>
                <Typography
                    component="p"
                    className={classNames(classes.description, "mt-4")}>
                    Na Babysits, acreditamos em conceder autoridade aos nossos utilizadores para tomarem as 
                    suas próprias decisões. Aqui deixamos alguns conselhos para garantir uma experiência segura na nossa plataforma:
                </Typography>
                <ul className="flex flex-wrap items-stretch justify-between mt-12">
                    <Card 
                        description="Utilize o serviço de mensagens da Babysits, que automaticamente detecta fraudes e comportamentos suspeitos. Nunca inclua informações de contacto na descrição do seu perfil."
                        icon="https://cdn.babysits.com/content/page/trust/tips/01-communicate-through-babysits.png"
                        title="Comunique através da Babysits"
                    />
                    <Card 
                        description="Utilize a ferramenta de marcações para ter uma visão geral de sessões futuras e anteriores, bem como dos valores acordados e detalhes dos trabalhos."
                        icon="https://cdn.babysits.com/content/page/trust/tips/03-plan-appointments.png"
                        title="Planeie as suas marcações através da Babysits"
                    />
                    <Card 
                        description="Pagar através da Babysits é simples, seguro e bastante recomendável. Utilizamos um sistema seguro e conveniente de pagamentos que não exige dinheiro vivo e que nunca partilha com terceiros os seus dados."
                        icon="https://cdn.babysits.com/content/page/trust/tips/10-pay.png"
                        title="Pagar através da Babysits"
                    />
                    <Card 
                        description="Exerça cautela ao lidar com perfis que contenham descrições escassas, sem preferências ou suspeitas. Informe-nos através do botão de denúncia no perfil."
                        icon="https://cdn.babysits.com/content/page/trust/tips/02-inspect-profiles.png"
                        title="Analise cuidadosamente os perfis e os utilizadores"
                    />
                    <Card 
                        description="Nunca partilhe documentos de identificação, a morada, o email, o número de telefone ou informações financeiras com quem apenas conhece online."
                        icon="https://cdn.babysits.com/content/page/trust/tips/04-personal-information.png"
                        title="Mantenha os dados pessoais em privado"
                    />
                    <Card 
                        description="Realize sempre um encontro presencial num local público antes de marcar o primeiro trabalho de babysitting."
                        icon="https://cdn.babysits.com/content/page/trust/tips/05-meet-before-appointment.png"
                        title="Faça uma reunião introdutória antes da primeira marcação"
                    />
                    <Card 
                        description="Antes de realizar uma marcação, verifique as avaliações e referências e peça para ver cópias dos certificados relevantes." 
                        icon="https://cdn.babysits.com/content/page/trust/tips/06-check-references-certificates.png" 
                        title="Verifique as referências e os certificados" 
                    />
                    <Card 
                        description="Preencha este formulário antes da primeira marcação de babysitting para evitar que surjam problemas durante o trabalho." 
                        icon="https://cdn.babysits.com/content/page/trust/tips/07-intake-form.png" 
                        title="Utilize o formulário de admissão" 
                    />
                    <Card 
                        description="Tem a sensação que outro utilizador não está a ser honesto e a comportar-se de forma suspeita? Denuncie-o e siga os nossos conselhos de prevenção de fraudes." 
                        icon="https://cdn.babysits.com/content/page/trust/tips/08-scam.png" 
                        title="Ajude a prevenir fraudes" 
                    />
                    <Card 
                        description="Incentivamos os utilizadores a denunciarem quem viole as normas comunitárias e agimos rapidamente para dar resposta às denúncias." 
                        icon="https://cdn.babysits.com/content/page/trust/tips/09-report.png" 
                        title="Denunciar membros suspeitos" 
                    />
                </ul>
            </section>
        </main>
    );
}; 

export default Container;