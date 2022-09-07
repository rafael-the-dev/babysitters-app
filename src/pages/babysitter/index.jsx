import { useEffect, useId, useMemo } from "react"
import { Button, Hidden, Typography } from "@mui/material";
import classNames from "classnames";
import dynamic from 'next/dynamic'

import classes from "./styles.module.css";

import { FilterContextProvider } from "src/context";
import { useFetch, useLazyFetch } from "src/hooks"

import BabysitterCard from "src/components/babysitter-card"
import Link from "src/components/link";
import Search from "src/components/search-form";

const DynamicMap = dynamic(() => import('src/components/leaflet-map'), {
    ssr: false,
})

const Container = () => {
    const { data } = useFetch({ url: "https://jsonplaceholder.typicode.com/photos" });
    const properties = useLazyFetch();
    const { lazyFetch } = properties;
    const users = properties.data;

    const id = useId();

    const usersData = useMemo(() => {
        console.log(users)
        if(Boolean(data) && Boolean(users)) {
            return users.map((user, index) => ({
                ...user,
                image: data[index]
            }));
        }

        return [];
    }, [ data, users ])

    useEffect(() => {
        if(data) {
            lazyFetch({ url: "https://jsonplaceholder.typicode.com/users" })
        }
    }, [ data ])

    return (
        <main className="">
            <FilterContextProvider>
                <Search />
            </FilterContextProvider>
            <section className="xl:flex justify-between">
                <div className={classNames(classes.content, "px-5 xl:pr-4")}>
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
                        <Link href="/">
                            <Button className="bg-neutral-800 py-2 px-6 rounded-lg text-white hover:bg-black">
                                Inscreva-se gratuitamente
                            </Button>
                        </Link>
                        <Link className="mt-3 text-black underline sm:mt-0 sm:ml-4" href="/">Como funciona</Link>
                    </div>
                    <div>
                        {
                            usersData.map((user, index) => (
                                <BabysitterCard { ...user } key={`${index}-${id}`} />
                            ))
                        }
                    </div>
                </div>
                <Hidden lgDown>
                    <div className={classNames(classes.mapContainer)}>
                        <DynamicMap />
                    </div>
                </Hidden>
            </section>
        </main>
    );
};

export default Container;