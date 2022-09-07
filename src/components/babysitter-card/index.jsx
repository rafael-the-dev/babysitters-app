import Image from "next/image"
import { IconButton, Typography } from "@mui/material";

import classes from "./styles.module.css"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedIcon from '@mui/icons-material/Verified';
import classNames from "classnames";


const Card = ({ image, name }) => {
    const loader = () => image.url;

    return (
        <div className="border-b border-gray-300 border-solid flex items-start justify-between py-6">
            <div className={classNames("relative rounded-xl", classes.imageContainer)}>
                <Image 
                    alt={image.title}
                    layout="fill"
                    loader={loader}
                    src={image.url}
                />
            </div>
            <div className={classNames(classes.content)}>
                { /** Header  */}
                <div className="flex items-start justify-between sm:items-center">
                    <div className="flex flex-col sm:items-center sm:flex-row">
                        <Typography
                            component="h3"
                            className="font-bold">
                            { name }
                        </Typography>
                        <div className='flex items-center mt-2 sm:mt-0 sm:ml-3'>
                            <VerifiedIcon />
                            <span className={classNames(classes.index, "font-bold ml-2 pl-4 relative before:absolute")}>24</span>
                        </div>
                    </div>
                    <IconButton className="ml-2">
                        <FavoriteBorderIcon />
                    </IconButton>
                </div>
                { /** End Header  */}
                { /** Body  */}
                <div className="mt-2">
                    <Typography
                        component="p"
                        className="text-neutral-400">
                        Olá, o meu nome é Adriana Bonifácio. 
                        Sou Educadora de Infância e Professora do 1.º Ciclo do Ensino Básico.
                        Considero-me uma pessoa compreensiva, organizada, pontual, responsável,..
                    </Typography>
                </div>
                <div className={classNames(classes.footer,
                    "flex flex-col  justify-between mt-4 sm:flex-row sm:items-end")}>
                    <div className={classNames(classes.footerContent, "before:bg-gray-400 before:block before:mr-auto")}>
                        <ul className="font-medium text-gray-500">
                            <li>Tempo médio de resposta: 3 horas</li>
                            <li className="mt-2">Registo criminal</li>
                        </ul>
                    </div>
                    <Typography
                        component="h3"
                        className="font-semibold mt-4 sm:mt-0">
                        5,00 €/hora
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Card;