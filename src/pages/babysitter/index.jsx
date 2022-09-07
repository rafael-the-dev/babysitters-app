import { Button, Typography } from "@mui/material"

import { FilterContextProvider } from "src/context"

import Link from "src/components/link";
import Search from "src/components/search-form";

const Container = () => {
    
    return (
        <main className="">
            <FilterContextProvider>
                <Search />
            </FilterContextProvider>
            <section className="">
                <div className="px-5">
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
                </div>
            </section>
        </main>
    );
};

export default Container;