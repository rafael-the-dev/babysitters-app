import { useCallback, useRef } from "react";
import Typography from "@mui/material/Typography"
import classNames from "classnames"

import classes from "./styles.module.css"

import Carousel from "src/components/carousel";
import Card from "./components/card";
import Link from "src/components/link"

const Container = () => {
    const sliderRef = useRef(null);
    const childrenList = useRef([]);
    const currentIndex = useRef(0);
    const widthReducer = useRef(0);

    const list = [
        { city: "Lagos", image: "https://cdn.babysits.com/users/7/f/d/782278/babysitter-782278-1623612403-rc-w350-h350.avif", name: "Rafaela", rating: 4 },
        { city: "Lisboa", image: "https://cdn.babysits.com/users/0/b/7/3836133/babysitter-3836133-1649264328-rc-w350-h350.avif", name: "Beatriz", rating: 4 },
        { city: "Caiscais", image: "https://cdn.babysits.com/users/4/6/9/1497560/babysitter-1497560-1579879651-rc-w350-h350.avif", name: "Adriana", rating: 4 },
        { city: "Porto", image: "https://cdn.babysits.com/users/2/3/a/741188/babysitter-741188-1662152633-rc-w350-h350.avif", name: "Ildze", rating: 4 },
        { city: "Lisboa", image: "https://cdn.babysits.com/users/c/a/9/3583412/babysitter-3583412-1656372051-rc-w350-h350.avif", name: "Monalyza", rating: 4 },
        { city: "Tavira", image: "https://cdn.babysits.com/users/3/2/f/3827597/babysitter-3827597-1648915929-rc-w350-h350.avif", name: "Monica", rating: 4 },
        { city: "Porto", image: "https://cdn.babysits.com/users/f/7/b/3355522/babysitter-3355522-1645713548-rc-w350-h350.avif", name: "Adriana", rating: 4 },
        { city: "Lisboa", image: "https://cdn.babysits.com/users/7/f/8/3462643/babysitter-3462643-1634046466-rc-w350-h350.avif", name: "Laisla", rating: 4 }
    ];

    const layout = useCallback(() => {
        const { innerWidth } = window;

        let width = 150;
        //gap.current = 70;
        widthReducer.current = 0;

        childrenList.current.forEach((child, index) => {
            if(innerWidth > 768) {
                width = 300;
                widthReducer.current = 90;
            }  

            child.style.width = `${width - widthReducer.current}px`;
            child.style.left = `${(width - (widthReducer.current - 20)) * index}px`;
        });
        
        sliderRef.current.style.width = `${width * childrenList.current.length}px`;
    }, []);

    const slide = useCallback(({ index }) => {
        let width = 150;

        if(innerWidth > 768) {
            width = 300;
        }  
        
        width = width - (widthReducer.current - 20);
        const slideIndex = index ?? currentIndex.current;

        sliderRef.current.style.transform = `translateX(-${slideIndex * width}px)`
    }, []);

    return (
        <section className="border-t border-gray-400 border-solid mt-8 py-12 mb-8 xl:mt-12">
            <Typography
                component="h2"
                className="font-bold mb-8 text-lg md:text-xl lg:text-2xl">
                Descubra outras opções dentro e nos arredores de Porto
            </Typography>
            <Carousel
                currentIndex={currentIndex}
                childrenList={childrenList}
                layout={layout}
                onSlide={slide}
                ref={sliderRef}
                sliderClassName={classes.slider}
                wrapperClassName="">
                {
                    list.splice(0, 10).map((item, index) => (
                        <Card { ...item } key={index} />
                    ))
                }
            </Carousel>
            <div className="flex flex-wrap items-center mt-4">
                <Link className="text-black text-medium hover:underline" href="/">Babysitters</Link>
                <span className="h-10 text-lg mx-3">.</span>
                <Link className="text-black text-medium hover:underline" href="/">Amas</Link>
                <span className="h-10 text-lg mx-3">.</span>
                <Link className="text-black text-medium hover:underline" href="/">Ofertas de trabalho de babysitting</Link>
            </div>
        </section>
    );
};

export default Container;