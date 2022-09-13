import { Avatar, Hidden, Typography } from "@mui/material"
import classNames from "classnames";

import classes from "./styles.module.css";

import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

import Chip from "./components/chip"
import Link from "src/components/link";

const Card = ({ createdAt, description, location, title }) => {

    return (
        <li className="even:bg-gray-50">
            <Link 
                className="text-black"
                href="/">
                <div className="px-4 py-6 sm:flex lg:px-6 xl:px-8">
                    <Hidden mdDown>
                        <Avatar alt="" className={classNames(classes.avatar)} src='' />
                    </Hidden>
                    <div className="grow md:ml-4 lg:ml-8">
                        <div className="flex items-center">
                            <Hidden mdUp>
                                <Avatar alt="" className={classNames(classes.avatar)} src='' />
                            </Hidden>
                            <div className="flex flex-col grow ml-3 md:ml-0">
                                <Typography
                                    className="font-semibold"
                                    component="h3">
                                    { title }
                                </Typography>
                                <ul className="flex text-xs">
                                    <li className="flex items-center mr-2"><LocationOnOutlinedIcon className="mr-2 text-sm" /> { location }</li>
                                    <li className="flex items-center "><WatchLaterOutlinedIcon className="mr-2 text-sm" /> { createdAt }</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-3">
                            <Typography
                                className={classNames(classes.description, "font-medium leading-6 text-sm")}
                                component="p">
                                { description }
                            </Typography>
                        </div>
                        <div className="flex flex-col justify-between mt-8 sm:flex-row sm:items-end">
                            <ul className="flex flex-wrap">
                                <Chip icon={<LocalOfferOutlinedIcon className="mr-2 text-sm" />} label="Childcare" />
                                <Chip icon={<WorkOutlineOutlinedIcon className="mr-2 text-sm" />} label="Part time" />
                                <Chip icon={<ChildCareOutlinedIcon className="mr-2 text-sm" />} label="Baby: 1" />
                                <Chip icon={<PetsOutlinedIcon className="mr-2 text-sm" />} label="Pet: 2" />
                            </ul>
                            <Typography
                                className={classNames(classes.price, "sm:mt-0 sm:mb-2",
                                "bg-cyan-700 font-semibold mt-4 opacity-70 py-3 px-4 text-center text-white")}
                                component="h4">
                                €4 / day
                            </Typography>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default Card;