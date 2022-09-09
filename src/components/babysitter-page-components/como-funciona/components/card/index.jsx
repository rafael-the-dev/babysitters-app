import classNames from "classnames";
import { Avatar, Typography } from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';

import classes from "./styles.module.css";

const Card = ({ icon, list, title }) => {

    return (
        <div className={classNames(classes.container, 
            "bg-cyan-200 flex flex-col mb-12 py-12 relative rounded-2xl ")}>
            <Avatar 
                className={classNames(classes.avatar, "absolute border border-solid border-white bg-cyan-200 top-0")}
                src={icon}
            />
            <Typography 
                className="border-b border-gray-300 border-solid font-semibold mt-2 pb-4 text-center text-xl w-full"
                component="h3">
                { title }
            </Typography>
            <ul className="list-disc mt-4 pl-12 text-left w-full">
                {
                    list.map((item, index) => (
                        <li className="font-medium mb-4 last:mb-0" key={index}>{ item }</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Card;