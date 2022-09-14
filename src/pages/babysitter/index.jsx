import { useCallback, useEffect, useId, useMemo, useRef } from "react"
import { Button, Hidden, Typography } from "@mui/material";
import classNames from "classnames";
import dynamic from 'next/dynamic'

import classes from "./styles.module.css";

import { FilterContextProvider } from "src/context";
import { useFetch, useLazyFetch } from "src/hooks"

import BabysitterCard from "src/components/babysitter-card"
import Link from "src/components/link";
import Search from "src/components/search-form";
import Seguranca from "src/components/home-components/seguranca";
import ComoFunciona from "src/components/babysitter-page-components/como-funciona";

const DynamicMap = dynamic(() => import('src/components/leaflet-map'), {
    ssr: false,
})

const Container = () => {
    const { data } = useFetch({ url: "https://jsonplaceholder.typicode.com/photos" });
    const properties = useLazyFetch();
    const { lazyFetch } = properties;
    const users = properties.data;

    const babysittersContentRef = useRef(null);
    const id = useId();

    const usersData = useMemo(() => {
        if(Boolean(data) && Boolean(users)) {
            return users.map((user, index) => ({
                ...user,
                image: data[index]
            }));
        }

        return [];
    }, [ data, users ]);

    const scrollHandler = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        const { scrollY } = window;
        console.log(scrollY)
        //console.log(scrollY, babysittersContentRef)
        if((scrollY > 40) && (scrollY < 800)) {
            console.log(scrollY)
            //window.scrollTo(0, 40);
            babysittersContentRef.current.scrollIntoView();
            /*babysittersContentRef.current.scroll({
                top: babysittersContentRef.current.scrollTop + 5,
                behavior: 'smooth'
              })*/
            return false;
        }
    }, [])

    useEffect(() => {
        if(data) {
            lazyFetch({ url: "https://jsonplaceholder.typicode.com/users" })
        }
    }, [ data, lazyFetch ]);

    useEffect(() => {
        const currentWindow = window;

        currentWindow.addEventListener('wheel', scrollHandler, {passive: false});

        return () => {
            currentWindow.removeEventListener('wheel', scrollHandler);
        };
    }, [ scrollHandler ])

    return (
        <main className="">
            <FilterContextProvider>
                <Search />
            </FilterContextProvider>
            <section 
                className="xl:flex justify-between">
                <div className={classNames(classes.content, "px-5 xl:pr-4")}
                    ref={babysittersContentRef}>
                    <div className="border-b border-solid border-gray-400 py-4">
                        <Typography
                            className="font-bold text-2xl"
                            component="h1">
                            Babysitter em Porto
                        </Typography>
                        <Typography
                            className="mt-1"
                            component="p">
                            Encontre uma babá de confiança em Babysits
                        </Typography>
                    </div>
                    <div className="border-b border-solid border-gray-400 flex flex-col py-4 sm:flex-row sm:items-center">
                        <Link href="registo">
                            <Button className="bg-neutral-800 py-2 px-6 rounded-lg text-white hover:bg-black">
                                Inscreva-se gratuitamente
                            </Button>
                        </Link>
                        <Link className="mt-3 text-black underline sm:mt-0 sm:ml-4" href="como-funciona">Como funciona</Link>
                    </div>
                    <div>
                        {
                            usersData.map((user, index) => (
                                <BabysitterCard { ...user } key={`${index}-${id}`} />
                            ))
                        }
                    </div>
                </div>
                <div className="h-full grow bg-cyan-50">
                    <h3>Hello world</h3>
                </div>
                <Hidden lgUp>
                    <div className={classNames(classes.mapContainer)}>
                        <DynamicMap />
                    </div>
                </Hidden>
            </section>
            <Seguranca />
            <ComoFunciona />
        </main>
    );
};

export default Container;