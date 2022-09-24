import { forwardRef, useCallback, useEffect, useRef } from "react"

import classNames from "classnames";

import classes from "./styles.module.css"


import Controllers from "./components/carousel-controllers"


const CarouselContainer = forwardRef(({ children, spacing, sliderClassName, wrapperClassName }, ref) => {
    const setChildrenListRef = useRef(null);
    const sliderRef = useRef(null);
    const childrenList = useRef([]);
    const currentIndex = useRef(0);
    const widthReducer = useRef(0);
    const widthRef = useRef(0);

    const layout = useCallback(() => {
        const { innerWidth } = window;
        if(!Boolean(spacing)) return;

        let width = innerWidth / spacing.xs.width - spacing.xs.gap;
        widthReducer.current = 0;
        let maxHeight = 0;

        childrenList.current.forEach((child, index) => {
            if(innerWidth > 1280 && Boolean(spacing['2xl'])) {
                width = innerWidth / spacing['2xl'].width;
                widthReducer.current = spacing['2xl'].gap;
            } 
            else if(innerWidth > 1024 && Boolean(spacing.xl)) {
                width = innerWidth / spacing.xl.width;
                widthReducer.current = spacing.xl.gap;
            } 
            else if(innerWidth > 900 && Boolean(spacing.lg)) {
                width = innerWidth / spacing.lg.width;
                widthReducer.current = spacing.lg.gap;
            } 
            else if(innerWidth > 768 && Boolean(spacing.md)) {
                width = innerWidth / spacing.md.width;
                widthReducer.current = spacing.md.gap;
            } 
            else if(innerWidth > 600 && Boolean(spacing.sm)) {
                width = innerWidth / spacing.sm.width;
                widthReducer.current = spacing.sm.gap;
            }  
            child.classList.remove("h-full");

            const { height } = child.getBoundingClientRect();
            if(height > maxHeight) maxHeight = height;
            
            child.style.width = `${width - widthReducer.current}px`;
            child.classList.add("h-full");
            child.style.left = `${(width - (widthReducer.current - 20)) * index}px`;
        });
        
        widthRef.current = width;
        sliderRef.current.style.height = `${maxHeight}px`
        sliderRef.current.style.width = `${width * childrenList.current.length}px`;
    }, [ spacing ]);

    const slide = useCallback(({ index }) => {
        const width = widthRef.current - (widthReducer.current - 20);
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
    }, [ childrenList, layout ]);

    useEffect(() => {
        const currentWindow = window;
    
        currentWindow.addEventListener("resize", resizeHandler);

        return () => {
            currentWindow.removeEventListener("resize", resizeHandler);
        };
    }, [ resizeHandler ])

    return (
        <div className={classNames(wrapperClassName, "relative")}>
            <div className="overflow-hidden pb-4 relative">
                <ul className={classNames(classes.slider, sliderClassName, "relative")} ref={sliderRef}>
                    { children }
                </ul>
            </div>
            <Controllers 
                indexRef={currentIndex} 
                slide={slide} 
                setChildrenListRef={setChildrenListRef} 
            />
        </div>
    );
});

CarouselContainer.displayName = "DefaultCarousel"

export default CarouselContainer;