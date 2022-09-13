import { Paper, Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import classes from "./styles.module.css";

const Card = ({ title, url }) => {
    return (
        <Paper 
            component="li" 
            className="absolute h-full rounded-2xl"
            elevation={2}>
            <div className={classNames(classes.imageContainer, "relative w-full")}>
                <Image 
                    alt={title}
                    layout="fill"
                    src={url}
                />
            </div>
            <div className="px-8 py-4">
                <Typography
                    className="font-bold text-center">
                    { title }
                </Typography>
            </div>
        </Paper>
    );
};

export default Card;