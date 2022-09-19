import Image from "next/image"
import { IconButton, Rating, Typography } from "@mui/material";
import classNames from "classnames";
import { styled } from '@mui/material/styles';

import classes from "./styles.module.css"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from "src/components/link"
import VerifiedIcon from '@mui/icons-material/Verified';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#59bec9',
    }
});


const Card = ({ image, name }) => {
    const loader = () => image.url;

    return (
        <Link className={classNames(classes.container, "text-black")} href="/babysitter/porto/1">
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
                                <li className="flex items-center">
                                    <TimerOutlinedIcon className="mr-1 text-sm" />
                                    Tempo médio de resposta: 3 horas
                                </li>
                                <li className="flex items-center mt-2">
                                    <NoteAltOutlinedIcon className="mr-1 text-sm" />
                                    Registo criminal
                                </li>
                            </ul>
                            <div className="flex flex-col sm:flex-row sm:items-center mt-3">
                                <StyledRating className="sm:mr-3" name="read-only" value={4} readOnly />  1 avaliação
                            </div>
                        </div>
                        <Typography
                            component="h3"
                            className="font-semibold mt-4 sm:mt-0">
                            5,00 €/hora
                        </Typography>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;