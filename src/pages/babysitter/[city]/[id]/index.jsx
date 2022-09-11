
import Image from "next/image";
import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";

import VerifiedIcon from '@mui/icons-material/Verified';

import ListItem from "src/components/babysitter-list-item"
import Rating from "src/components/blue-rating"

const Container = () => {

    return (
        <main>
            <div>

            </div>
            <section 
                className={classNames(classes.hero, `bg-cover bg-center bg-no-repeat flex items-center px-5`)}
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(89,190,201, .8), rgb(89,190,201)), url(https://cdn.babysits.com/users/f/7/b/3355522/babysitter-3355522-1645713548-rc-w350-h350.avif)`
                }}>
                <div className={classNames(classes.imageContainer, `relative rounded-xl`)}>
                    <Image 
                        alt="Adriana Bonifácio"
                        layout="fill"
                        src="https://cdn.babysits.com/users/f/7/b/3355522/babysitter-3355522-1645713548-rc-w350-h350.avif"
                    />
                </div>
                <div className="flex flex-col ml-4">
                    <div className="flex flex-col sm:flex-row">
                        <Typography
                            component="h1"
                            className="font-bold text-lg">
                            Adriana Bonifácio
                        </Typography>
                        <div className="flex items-center mt-2 sm:mt-0 sm:ml-3">
                            <VerifiedIcon />
                            <span className={classNames(classes.index, "font-bold ml-2 pl-4 relative before:absolute")}>24</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="px-5 py-8">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <Rating value={4} /> 1 Avaliação 
                    </div>
                    <span className="font-bold ml-3">Supersitster</span>
                </div>
                <Typography
                    component="p"
                    className="leading-6 mt-4 text-sm">
                    Olá, o meu nome é Adriana Bonifácio. cadora de Infância e Professora do 1.º Ciclo do 
                    Ensino Básico. Considero-me uma pessoa compreensiva, organizada, pontual, responsável, 
                    carinhosa, dinâmica e criativa, características estas que considero essenciais para partilhar 
                    momentos de qualidade com crianças.
                </Typography>
            </div>
            <ul className="border-t border-gray-400 border-solid px-5 pt-8 mt-8">
                <ListItem 
                    description="> 2 anos"
                    title="Experiência de babysitting"
                    titleComponent="h2"
                />
                <ListItem 
                    description="Criança (Pré-escolar) • Criança (Ensino Básico) • Adolescente"
                    title="Experiência com a faixa etária"
                    titleComponent="h2"
                />
                <ListItem 
                    description="Adriana Bonifácio tem uma certificado em cuidados para crianças com necessidades especiais. Entre diretamente em contacto com Adriana Bonifácio para verificar as certificações. Saber mais"
                    title="Experiência com crianças com necessidades especiais"
                    titleComponent="h2"
                />
            </ul>
            <ul className="border-t border-gray-400 border-solid px-5 pt-8 mt-8">
                <ListItem 
                    description="Supersitters são babysitters que prestaram um excelente serviço na comunidade Babysits."
                    title="Adriana Bonifácio é um(a) Supersitter"
                    titleComponent="h2"
                />
                <ListItem 
                    description="Adriana Bonifácio forneceu com êxito um documento de identificação oficial. "
                    title="Documento de identificação"
                    titleComponent="h2"
                />
                <ListItem 
                    description="Adriana Bonifácio forneceu o Registo criminal, e este foi verificado pela Babysits. Saber mais
                    Emitido em: 16 de fevereiro de 2022"
                    title="Registo criminal"
                    titleComponent="h2"
                />
                <ListItem 
                    description="Adriana Bonifácio tem certificação em primeiros socorros. Entre em contacto diretamente com Adriana Bonifácio para verificar as certificações."
                    title="Certificado de primeiros socorros"
                    titleComponent="h2"
                />
            </ul>
        </main>
    );
};

export default Container;