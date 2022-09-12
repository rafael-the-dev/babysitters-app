import { Paper, Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import classes from "./styles.module.css";

import Rating from "src/components/blue-rating"

const Card = ({ city, image, name, rating }) => {

    return (
        <Paper 
            component="li" 
            className="absolute h-full rounded-2xl"
            elevation={2}>
            <div className={classNames(classes.imageContainer, "relative w-full")}>
                <Image 
                    alt={name}
                    layout="fill"
                    src={image}
                />
            </div>
            <div className="flex flex-col items-center px-8 py-4">
                <Typography
                    className="font-bold text-center"
                    component="h3">
                    { name }
                </Typography>
                <Typography
                    className="mt-4 mb-2"
                    component="sapn">
                    { city }
                </Typography>
                <Rating value={rating} />
            </div>
        </Paper>
    );
};

export default Card;