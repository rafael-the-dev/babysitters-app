import { Typography } from "@mui/material"
import classNames from "classnames"

import classes from "./styles.module.css"

import Card from "../candidate-card";
import CityCard from "./components/city-card"
import ComoFunciona from "src/components/como-funciona";
import DescubraMais from "../descubra-mais";
import NossasApps from "../nossas-apps"
import Seguranca from "../seguranca";

const Container = () => {

    return (
        <>
            <section className={classNames(classes.jobsContainer, "py-12 px-5")}>
                <Typography
                    className="font-bold text-2xl"
                    component="h2">
                    Featured jobs
                </Typography>
                <ul className={classNames(classes.jobsList, "mt-8 xl:mt-12")}>
                    <Card 
                        createdAt="5 days ago"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
                        location="lisbon, Portugal"
                        title="This is a title example"
                    />
                    <Card 
                        createdAt="5 days ago"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
                        location="lisbon, Portugal"
                        title="This is a title example"
                    />
                    <Card 
                        createdAt="5 days ago"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
                        location="lisbon, Portugal"
                        title="This is a title example"
                    />
                    <Card 
                        createdAt="5 days ago"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
                        location="lisbon, Portugal"
                        title="This is a title example"
                    />
                </ul>
            </section>
            <Seguranca />
            <section className={classNames("py-12 px-5")}>
                <Typography
                    className="font-bold text-center text-2xl"
                    component="h2">
                    Featured Cities
                </Typography>
                <ul className="flex-wrap justify-between mt-8 sm:flex lg:mt-12">
                    <CityCard 
                        city="Lisboa"
                        image="/images/lisbon.jfif"
                        jobs={376}
                    />
                    <CityCard 
                        city="Lagos"
                        image="/images/lagos.jfif"
                        jobs={100}
                    />
                    <CityCard 
                        city="San Francisco"
                        image="/images/san-francisco.jfif"
                        jobs={148}
                    />
                    <CityCard 
                        city="Porto"
                        image="/images/porto.jfif"
                        jobs={325}
                    />
                </ul>
            </section>
            <ComoFunciona />
            <NossasApps />
            <DescubraMais />
        </>
    );
};

export default Container;