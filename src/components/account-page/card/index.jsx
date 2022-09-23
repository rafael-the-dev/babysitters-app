import classNames from "classnames";
import { Paper, Typography } from "@mui/material";

import classes from "./styles.module.css"

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import Link from "src/components/Link"

const Card = ({ href, icon, title }) => (
    <Link 
        className={classNames(classes.container, "mb-4 text-black")}
        href={href}>
        <Paper 
            className={classNames(classes.paper, `flex flex-col h-full px-3 py-6`)}
            elevation={2}>
            { icon }
            <div className="grow flex items-end mt-3">
                <Typography
                    component="h3"
                    className="font-semibold mr-2">
                    { title }
                </Typography>
                <KeyboardArrowRightOutlinedIcon />
            </div>
        </Paper>
    </Link>
);

export default Card;