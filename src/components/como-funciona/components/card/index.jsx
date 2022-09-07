import classNames from "classnames";
import { Avatar, Typography } from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';

import classes from "./styles.module.css";

const Card = ({ description, icon, title }) => {

    return (
        <div className={classNames(classes.container, 
            "bg-gray-300 flex flex-col items-center mb-12 py-12 px-8 relative rounded-2xl text-center md:px-4")}>
            <Avatar className={classNames(classes.avatar, "absolute border border-solid border-white bg-gray-300 top-0")}>
                <PersonIcon />
            </Avatar>
            <Typography 
                className="font-semibold text-xl"
                component="h3">
                { title }
            </Typography>
            <Typography 
                className="mt-4"
                component="p">
                { description }
            </Typography>
        </div>
    );
};

export default Card;