import { forwardRef, useCallback, useEffect, useRef } from "react"

import classNames from "classnames";

import classes from "./styles.module.css"


import Controllers from "./components/carousel-controllers"


const CarouselContainer = forwardRef(({ children, childrenList, currentIndex, layout, onSlide, sliderClassName, wrapperClassName }, ref) => {
    const setChildrenListRef = useRef(null);

    const resizeHandler = useCallback(() => {
        layout();
        onSlide({});
    }, [ layout, onSlide ]);

    useEffect(() => {
        const list = [ ...ref.current.children ];
        childrenList.current = list;
        layout();
        setChildrenListRef.current?.(list);
    }, [ childrenList, layout, ref ]);

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
                <ul className={classNames(classes.slider, sliderClassName, "relative")} ref={ref}>
                    { children }
                </ul>
            </div>
            <Controllers 
                indexRef={currentIndex} 
                slide={onSlide} 
                setChildrenListRef={setChildrenListRef} 
            />
        </div>
    );
});

CarouselContainer.displayName = "DefaultCarousel"

export default CarouselContainer;