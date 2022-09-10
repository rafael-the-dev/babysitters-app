import { Avatar, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";

const Card = ({ children, description, icon, title }) => {

    return (
        <li className={classNames(classes.container, "flex mb-8 sm:flex-col")}>
            <Avatar 
                alt={title}
                className={classes.avatar}
                src={icon}
            />
            <div className="grow ml-4 sm:ml-0 sm:mt-3">
                <Typography
                    component="h3"
                    className="font-semibold text-sm">
                    { title }
                </Typography>
                <Typography
                    className="leading-6 mt-2 text-sm text-neutral-900">
                    { description}
                </Typography>
                { children }
            </div>
        </li>
    );
};

export default Card;