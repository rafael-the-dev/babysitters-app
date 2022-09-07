import { useCallback, useEffect, useRef } from "react"

import Button from "@mui/material/Button";
import classNames from "classnames";

import classes from "./styles.module.css"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Link from "src/components/link";
import Card from "./components/card";
import Controllers from "./components/carousel-controllers"

import { useFetch } from "src/hooks";

const DescubraMaisContainer = () => {
    const sliderRef = useRef(null);
    const childrenList = useRef([]);
    const currentIndex = useRef(0);
    const setChildrenListRef = useRef(null);
    const widthReducer = useRef(0);

    const list = [
        {
            title: "Dicas sobre a plataforma",
            url: "https://cdn.babysits.com/content/community/categories/platform-tips.jpg"
        },
        {
            title: "Confiança e segurança",
            url: "https://cdn.babysits.com/content/global/discover-more/platform-safety.jpg"
        },
        {
            title: "Dicas para famílias",
            url: "https://cdn.babysits.com/content/community/categories/european/tips-for-parents.jpg"
        },
        {
            title: "Babysits para crianças com necessidades especiais",
            url: "https://cdn.babysits.com/content/community/categories/special-needs.jpg"
        },
        {
            title: "Babysits para Empresas",
            url: "https://cdn.babysits.com/content/global/discover-more/babysits-for-work.jpg"
        },
        {
            title: "Ação Climática",
            url: "https://cdn.babysits.com/content/community/categories/climate-action.jpg"
        }
    ];

    const layout = useCallback(() => {
        const { innerWidth } = window;

        let width = 200;
        //gap.current = 70;
        widthReducer.current = 0;

        childrenList.current.forEach((child, index) => {
            if(innerWidth > 768) {
                width = 350;
                widthReducer.current = 90;
            }  

            child.style.width = `${width - widthReducer.current}px`;
            child.style.left = `${(width - (widthReducer.current - 20)) * index}px`;
        });

        sliderRef.current.style.width = `${width * childrenList.current.length}px`;
    }, []);

    const slide = useCallback(({ index }) => {
        let width = 200;

        if(innerWidth > 768) {
            width = 350;
        }  
        
        width = width - (widthReducer.current - 20);
        const slideIndex = index ?? currentIndex.current;
        sliderRef.current.style.transform = `translateX(-${slideIndex * width}px)`
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
        <div className="px-5 pb-12">
            <Link href="/">
                <Button
                    className="capitalize font-bold text-lg text-black"
                    endIcon={<PlayArrowIcon />}>
                    Descubra mais
                </Button>
            </Link>
            <div className="relative">
                <div className="overflow-hidden py-4 relative">
                    <ul className={classNames(classes.slider, "relative")} ref={sliderRef}>
                        {
                            list.splice(0, 10).map((item) => (
                                <Card { ...item } key={item.id} />
                            ))
                        }
                    </ul>
                </div>
                <Controllers indexRef={currentIndex} slide={slide} setChildrenListRef={setChildrenListRef} />
            </div>
        </div>
    );
};

export default DescubraMaisContainer;