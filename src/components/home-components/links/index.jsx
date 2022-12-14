import { Typography } from "@mui/material";
import Image from "next/image";

import classes from "./styles.module.css"

import Link from "src/components/link"
import ListItem from "./components/list-item"

const Container = () => {
    const list = [
        { href: "babysitter", label: "Babysitters" },
        { href: "amas", label: "Amas" },
        { href: "/", label: "Cuidados para crianças com necessidades especiais" },
        { href: "/", label: "Famílias que ajudam famílias Ofertas de trabalho de babysitting" },
        { href: "/", label: " Trabalhos de ama" },
        { href: "/", label: "Agências" },
    ];

    const cities = [
        { href: "babysitter/lisboa", label: "Lisboa" },
        { href: "babysitter/porto", label: "Porto" },
        { href: "babysitter/cascais", label: "Cascais" },
        { href: "babysitter/sintra", label: "Sintra" },
        { href: "babysitter/vila-nova-de-gaia", label: "Vila Nova de Gaia" },
        { href: "babysitter/coimbra", label: "Coimbra" },
        { href: "babysitter/oeiras", label: "Oeiras" },
        { href: "babysitter/braga", label: "Braga" },
        { href: "babysitter/almada", label: "Almada" },
        { href: "babysitter/loures", label: "Loures" },
        { href: "babysitter/seixal", label: "Seixal" },
        { href: "babysitter/matosinhos", label: "Matosinhos" },
        { href: "babysitter/amadora", label: "Amadora" },
        { href: "babysitter/odivelas", label: "Odivelas" },
    ];

    return (
        <section className="flex flex-col px-5 pb-16 md:flex-row-reverse lg:pt-8">
            <div className={classes.content}>
                <div className="border-b border-gray-400 border-solid pb-8">
                    <Typography 
                        className="font-bold text-lg"
                        component="h2">
                        O que você está procurando?
                    </Typography>
                    <ul className="flex flex-wrap mt-8 w-full">
                        {
                            list.map((item, index) => <ListItem { ...item } key={index} />)
                        }
                    </ul>
                </div>
                <div className="border-b border-gray-400 border-solid py-8">
                    <Typography 
                        className="font-bold text-lg"
                        component="h2">
                        Cuidados infantis onde você precisar
                    </Typography>
                    <ul className="flex flex-wrap mt-8 w-full">
                        {
                            cities.map((item, index) => <ListItem { ...item } key={index} />)
                        }
                    </ul>
                </div>
                <div className='flex flex-wrap items-center py-8'>
                    <Typography>
                        Os seus funcionários precisam de uma babysitter?
                    </Typography>
                    <Link className="font-bold ml-3 text-black text-lg underline" href="/">Babysits para Empresas</Link>
                </div>
            </div>
            <div className={classes.imageContainer}>
            </div>
        </section>
    );
};

export default Container;