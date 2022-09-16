import { useCallback, useMemo, useState } from "react";
import { Button, Typography, Tooltip } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import classes from "./styles.module.css"

import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

const Container = () => {
    const [ imageFile, setImageFile ] = useState(null);
    const [ videoFile, setVideoFile ] = useState(null);

    const videoMemo = useMemo(() => (
        <div className={classNames(classes.videoWrapper)}>
            <video autoPlay className="h-full object-cover w-full" loop muted  controlsList="nofullscreen nodownload noremoteplayback">
                <source src="https://cdn.babysits.com/content/page/profile-wizard/profile-photo-video.mp4" type="video/mp4" />
            </video>
        </div>
    ), []);

    const alertLabel = useMemo(() => (
        <label 
            className="block font-medium leading-6 mt-8 text-center text-red-600">
            As fotos de perfil são uma maneira importante de se dar a conhecer. 
            É necessário adicionar uma foto que mostre claramente o seu rosto.
        </label>
    ), []);

    const selectedImage = imageFile ?? "https://cdn.babysits.com/logo/no-image/no-image-rc-w350-h350.jpg";

    return (
        <div className="px-5 py-12">
            { videoMemo }
            <div>
                { alertLabel }
                <div className="flex flex-col justify-between mt-8 sm:flex-row">
                    <div className="flex flex-col items-center">
                        <Button
                            className={classNames(classes.button, classes.buttonImage, `bg-cover bg-center bg-no-repeat
                            flex items-center justify-center relative text-white`)}>
                            <CameraAltOutlinedIcon className={classNames(classes.buttonIcon, "absolute left-1/2 top-1/2 z-10")} />
                            <Image 
                                alt=""
                                layout="fill"
                                src={selectedImage}
                            />
                        </Button>
                        <div className="flex items-center my-3">
                            Foto de perfil
                            <Tooltip 
                                className='ml-2'
                                title="As fotos de perfil são uma maneira importante de se dar a conhecer. É necessário adicionar uma foto que mostre claramente o seu rosto." 
                                placement="top">
                                <ErrorOutlinedIcon />
                            </Tooltip>
                            
                        </div>
                        <div className='text-red-600 text-sm'>Foto clara do rosto necessária</div>
                    </div>
                    <div className="flex flex-col items-center mt-8 sm:mt-0">
                        <Button
                            className={classNames(classes.button, classes.buttonImage, `bg-cover bg-center bg-no-repeat
                            flex items-center justify-center relative text-white`)}>
                            <VideocamOutlinedIcon className={classNames(classes.buttonIcon, "absolute left-1/2 top-1/2 z-10")} />
                            <Image 
                                alt=""
                                layout="fill"
                                src={selectedImage}
                            />
                        </Button>
                        <div className="flex items-center my-3">
                            Vídeo de perfil
                            <Tooltip 
                                className='ml-2'
                                title="Torne seu perfil mais profissional adicionando um vídeo. É a melhor maneira de mostrar sua personalidade, se destacar e aumentar suas chances de ser contratado."
                                placement="top">
                                <ErrorOutlinedIcon />
                            </Tooltip>
                        </div>
                        <div className='text-cyan-700 text-sm'>Altamente recomendado</div>
                    </div>
                </div>
                <div className="mt-12">
                    <Typography
                        component="p"
                        className="mb-4 text-medium text-center">
                        Exemplos de fotos de perfil que você pode adicionar:
                    </Typography>
                    <div className="flex justify-center">
                        <div className={classNames(classes.demoImageContainer, "mr-3 relative")}>
                            <Image 
                                alt=""
                                layout="fill"
                                src="https://cdn.babysits.com/content/page/profile-wizard/photo-example/babysitter-1.jpg"
                            />
                        </div>
                        <div className={classNames(classes.demoImageContainer, "mr-3 relative")}>
                            <Image 
                                alt=""
                                layout="fill"
                                src="https://cdn.babysits.com/content/page/profile-wizard/photo-example/babysitter-2.jpg"
                            />
                        </div>
                        <div className={classNames(classes.demoImageContainer, "relative")}>
                            <Image 
                                alt=""
                                layout="fill"
                                src="https://cdn.babysits.com/content/page/profile-wizard/photo-example/babysitter-3.jpg"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <Typography
                        component="p"
                        className="mb-4 text-medium text-center">
                        Exemplo de um vídeo de perfil que você pode gravar:
                    </Typography>
                    <div className={classNames(classes.demoVideoWrapper)}>
                        <video autoPlay className="h-full object-cover w-full" loop muted  controlsList="nofullscreen nodownload noremoteplayback">
                            <source src="https://cdn.babysits.com/content/page/profile-wizard/video-example/babysitter.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;