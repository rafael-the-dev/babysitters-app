import { Typography } from "@mui/material";

import classes from "./styles.module.css"

import ListItem from "./components/list-item"

const Container = () => {
    const list = [
        { href: "/", label: "Babysitters" },
        { href: "/", label: "Amas" },
        { href: "/", label: "Cuidados para crianças com necessidades especiais" },
        { href: "/", label: "Famílias que ajudam famílias Ofertas de trabalho de babysitting" },
        { href: "/", label: " Trabalhos de ama" },
        { href: "/", label: "Agências" },
    ];

    return (
        <section className="flex flex-col px-5 pb-16">
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
                            list.map((item, index) => <ListItem { ...item } key={index} />)
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Container;