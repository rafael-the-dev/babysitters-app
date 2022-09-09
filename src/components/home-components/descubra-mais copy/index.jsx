import { useCallback, useEffect, useId, useRef } from "react"

import Button from "@mui/material/Button";
import classNames from "classnames";

import classes from "./styles.module.css"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Link from "src/components/link";
import Card from "./components/card";
import Controllers from "./components/carousel-controllers"

import { useFetch } from "src/hooks";

const BabysittersContainer = () => {
    const sliderRef = useRef(null);
    const childrenList = useRef([]);
    const currentIndex = useRef(0);
    const setChildrenListRef = useRef(null);
    const widthReducer = useRef(0);
    const id = useId();
    const width = useRef(0);

    const list = [
        {
            city: "Lagos",
            name: "Rafaela",
            rating: 4,
            url: "https://cdn.babysits.com/users/7/f/d/782278/babysitter-782278-1623612403-rc-w350-h350.jpg"
        },
        {
            city: "Tavira",
            name: "Monalysa",
            rating: 4,
            url: "https://cdn.babysits.com/users/c/a/9/3583412/babysitter-3583412-1656372051-rc-w350-h350.jpg"
        },
        {
            city: "Lisboa",
            name: "Beatriz",
            rating: 4,
            url: "https://cdn.babysits.com/users/0/b/7/3836133/babysitter-3836133-1649264328-rc-w350-h350.jpg"
        },
        {
            city: "Lisboa",
            name: "Ildze",
            rating: 4,
            url: "https://cdn.babysits.com/users/2/3/a/741188/babysitter-741188-1662152633-rc-w350-h350.jpg"
        },
        {
            city: "Lisboa",
            name: "Monica",
            rating: 4,
            url: "https://cdn.babysits.com/users/3/2/f/3827597/babysitter-3827597-1648915929-rc-w350-h350.jpg"
        },
        {
            city: "Lisboa",
            name: "Laisla",
            rating: 4,
            url: "https://cdn.babysits.com/users/7/f/8/3462643/babysitter-3462643-1634046466-rc-w350-h350.jpg"
        },
        {
            city: "Lisboa",
            name: "Teresa",
            rating: 4,
            url: "https://cdn.babysits.com/users/3/c/6/4010495/babysitter-4010495-1656805845-rc-w350-h350.jpg"
        },
        {
            city: "Lisboa",
            name: "Moniqui",
            rating: 4,
            url: "https://cdn.babysits.com/users/d/a/f/2329970/babysitter-2329970-1606671338-rc-w350-h350.jpg"
        }
    ];

    const layout = useCallback(() => {
        const { innerWidth } = window;

        width.current = 220;
        //gap.current = 70;
        widthReducer.current = 0;

        childrenList.current.forEach((child, index) => {
            if(innerWidth > 768) {
                width.current = 300;
                widthReducer.current = 90;
            }  

            child.style.width = `${width.current - widthReducer.current}px`;
            child.style.left = `${(width.current - (widthReducer.current - 20)) * index}px`;
        });

        sliderRef.current.style.width = `${width.current * childrenList.current.length}px`;
    }, []);

    const slide = useCallback(({ index }) => {
        const widthTemp = width.current - (widthReducer.current - 20);

        const slideIndex = index ?? currentIndex.current;
        sliderRef.current.style.transform = `translateX(-${slideIndex * widthTemp}px)`
    }, []);

    const resizeHandler = useCallback(() => {
        layout();
        slide({});
    }, [ layout, slide ]);

    useEffect(() => {
        const list = [ ...sliderRef.current.children ];
        childrenList.current = list;
        layout();
        setChildrenListRef.current?.(list);
    }, [ layout ]);

    useEffect(() => {
        const currentWindow = window;
    
        currentWindow.addEventListener("resize", resizeHandler);

        return () => {
            currentWindow.removeEventListener("resize", resizeHandler);
        };
    }, [ resizeHandler ])

    return (
        <div className="px-5 pb-12 pt-20">
            <Link href="/">
                <Button
                    className="capitalize font-bold mb-4 text-left sm:text-lg text-black"
                    endIcon={<PlayArrowIcon />}>
                    Conheça babysitters selecionadas em sua área
                </Button>
            </Link>
            <div className="relative">
                <div className="overflow-hidden py-4 relative">
                    <ul className={classNames(classes.slider, "relative")} ref={sliderRef}>
                        {
                            list.splice(0, 10).map((item, index) => (
                                <Card { ...item } key={`${index}-${id}`} />
                            ))
                        }
                    </ul>
                </div>
                <Controllers indexRef={currentIndex} slide={slide} setChildrenListRef={setChildrenListRef} />
            </div>
            <Link className="block font-medium mt-6 text-black text-center underline" href="babysitter">
                Ver todas 10 000 babysitters disponiveis
            </Link>
        </div>
    );
};

export default BabysittersContainer;