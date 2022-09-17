import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, Typography, Tooltip } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import classes from "./styles.module.css"

import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

const Container = ({ onSubmit }) => {
    const [ imageFile, setImageFile ] = useState({
        file: null,
        url: null
    });
    const [ videoFile, setVideoFile ] = useState({
        file: null,
        url: null
    });
    const [ errors, setErrors ] = useState({
        image: false,
        video: false
    })

    const errorsRef = useRef({});
    const imageFileRef = useRef(null);
    const videoFileRef = useRef(null);

    const changeHandler = useCallback(func => event => {
        const inputFile = event.target.files[0];
        
        if(inputFile) {
            const reader = new FileReader();

            reader.onload = event => {
                func(currentFile => ({
                    ...currentFile,
                    url:  event.target.result
                }))
            };

            reader.readAsDataURL(inputFile);
            func({
                file: inputFile,
                url:  event.target.result
            })
        }
    }, [ ]);

    const clickHandler = useCallback(elementRef => () => {
        elementRef.current?.click();
    }, [])

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

    const imageContainerMemo  = useMemo(() => {
        
        const selectedImage = imageFile.url ?? "https://cdn.babysits.com/logo/no-image/no-image-rc-w350-h350.jpg";
       
        return (
            <div className="flex flex-col items-center">
                <Button
                    className={classNames(classes.button, classes.buttonImage, `bg-cover bg-center bg-no-repeat
                    flex items-center justify-center relative text-white`)}
                    onClick={clickHandler(imageFileRef)}>
                    <CameraAltOutlinedIcon className={classNames(classes.buttonIcon, "absolute left-1/2 top-1/2 z-10")} />
                    <Image 
                        alt=""
                        layout="fill"
                        src={selectedImage}
                    />
                </Button>
                <input accept="image/png, image/jpg, image/jpeg" className="hidden" ref={imageFileRef} type="file" onChange={changeHandler(setImageFile)} />
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
        );
    }, [ imageFile, changeHandler, clickHandler ]);

    const videoContainerMemo = useMemo(() => {
        const selectedImage = "https://cdn.babysits.com/logo/no-image/no-image-rc-w350-h350.jpg";
        
        return (
            <div className="flex flex-col items-center mt-8 sm:mt-0">
                <Button
                    className={classNames(classes.button, classes.buttonImage, `bg-cover bg-center bg-no-repeat
                    flex items-center justify-center relative text-white`)}
                    onClick={clickHandler(videoFileRef)}>
                    <VideocamOutlinedIcon className={classNames(classes.buttonIcon, "absolute left-1/2 top-1/2 z-10")} />
                    { !Boolean(videoFile.file) && <Image 
                        alt=""
                        layout="fill"
                        src={selectedImage}
                    />}
                    {Boolean(videoFile.file) && <video autoPlay className="h-full object-cover w-full" loop muted  controlsList="nofullscreen nodownload noremoteplayback">
                        <source src={videoFile.url} type="video/*" />
                    </video>}
                </Button>
                <input accept="video/mp4,video/x-m4v,video/*" className="hidden" ref={videoFileRef} type="file" onChange={changeHandler(setVideoFile)} />
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
        );
    }, [ changeHandler, clickHandler, videoFile ])

    const examplesMemo = useMemo(() => (
        <>
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
        </>
    ), [])

    useEffect(() => {
        setErrors({
            image: !Boolean(imageFile.file),
            video: !Boolean(videoFile.file) && !Boolean(imageFile.file)
        });
    }, [ imageFile, videoFile ]);

    useEffect(() => {
        errorsRef.current = errors;
    }, [ errors ]);

    const submitHandler = useCallback(() => {
        return new Promise((resolve, reject) => {
            if(errorsRef.current.image || errorsRef.current.video) {
                reject("Preencha todos os campos");
                return;
            }

            resolve("")
        })
    }, [ ]);

    useEffect(() => {
        onSubmit.current = submitHandler;
    }, [ onSubmit, submitHandler ])

    return (
        <div className="px-5 py-12">
            { videoMemo }
            <div>
                { ( errors.image || errors.video) && alertLabel }
                <div className="flex flex-col justify-between mt-8 sm:flex-row">
                    { imageContainerMemo }
                    { videoContainerMemo }
                </div>
                { examplesMemo }
            </div>
        </div>
    );
};

export default Container;