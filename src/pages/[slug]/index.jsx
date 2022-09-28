import { useContext, useEffect, useId, useMemo, useRef } from "react"
import { Button, Hidden, Typography } from "@mui/material";
import { v4 as uuidV4 } from "uuid"
import { useRouter } from "next/router"
import classNames from "classnames";
import dynamic from 'next/dynamic'

import classes from "./styles.module.css";
import lang from "./lang.json"

import { AppContext, FilterContextProvider } from "src/context";
import { useFetch, useLazyFetch } from "src/hooks";

import BabysitterCard from "src/components/babysitter-card";
import DefaultContainer from "src/components/babysitter-page-components/container"
import Link from "src/components/link";
import Search from "src/components/search-form";

const DynamicMap = dynamic(() => import('src/components/leaflet-map'), {
    ssr: false,
})

const Container = () => {
    const { language } = useContext(AppContext);
    const { query: { slug } } = useRouter();

    const { data } = useFetch({ url: "https://jsonplaceholder.typicode.com/photos" });
    const properties = useLazyFetch();
    const { lazyFetch } = properties;
    const users = properties.data;

    const babysittersContentRef = useRef(null);
    const id = useId();//

    const titleMemo = useMemo(() => {
        if([ "babysitter", "amas" ].includes(slug)) {
            return lang[language].babysitter.title.replace("%slug", slug);
        }

        return "Encontrar trabalhos de babysitting";
    }, [ language, slug ])

    const descriptionMemo = useMemo(() => {
        if([ "babysitter", "amas" ].includes(slug)) {
            return lang[language].babysitter.description.replace("%slug", slug).replace("%results", 10450);
        }

        return "1 263 famílias que correspondem à sua pesquisa";
    }, [ language, slug ])

    const usersData = useMemo(() => {
        if(Boolean(data) && Boolean(users)) {
            return users.map((user, index) => ({
                ...user,
                image: data[index]
            }));
        }

        return [];
    }, [ data, users ]);

    useEffect(() => {
        if(data) {
            lazyFetch({ url: "https://jsonplaceholder.typicode.com/users" })
        }
    }, [ data, lazyFetch ]);

    return (
        <DefaultContainer className="">
            <FilterContextProvider>
                <Search />
            </FilterContextProvider>
            <section 
                className="xl:flex justify-between pb-8">
                <div className={classNames(classes.content, "overflow-y-auto px-5 xl:pr-4")}
                    ref={babysittersContentRef}>
                    <div className="border-b border-solid border-gray-400 py-4">
                        <Typography
                            className="font-bold text-2xl"
                            component="h1">
                            { titleMemo }
                        </Typography>
                        <Typography
                            className="mt-1"
                            component="p">
                            { descriptionMemo }
                        </Typography>
                    </div>
                    <div className="border-b border-solid border-gray-400 flex flex-col py-4 sm:flex-row sm:items-center">
                        <Link href="registo">
                            <Button className="bg-neutral-800 capitalize py-2 px-6 rounded-lg text-white hover:bg-black">
                                { language === "PORTUGUESE" ? "Inscreva-se gratuitamente" : "Sign up for free" }
                            </Button>
                        </Link>
                        <Link className="mt-3 text-black underline sm:mt-0 sm:ml-4" href="como-funciona">
                            { language === "PORTUGUESE" ? "Como funciona" : "How it works" }
                        </Link>
                    </div>
                    <div className="pb-8">
                        {
                            usersData.map((user, index) => (
                                <BabysitterCard { ...user } key={uuidV4()} />
                            ))
                        }
                    </div>
                </div>
                <Hidden lgUp>
                    <div className={classNames(classes.mapContainer)}>
                        <DynamicMap />
                    </div>
                </Hidden>
            </section>
        </DefaultContainer>
    );
};

export default Container;