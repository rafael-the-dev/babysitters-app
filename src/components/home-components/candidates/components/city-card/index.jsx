import Image from "next/image";
import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";

import Link from "src/components/link";

const Card = ({ city, image, jobs }) => (
    <li className={classNames(classes.container, `mb-8`)}>
        <Link 
            className={classNames(classes.link, "block relative")}
            href="/">
            <Image 
                alt=""
                layout="fill"
                src={image}
            />
            <div className={classNames(classes.content, "px-4 pb-6",
                "absolute flex flex-col h-full items-start justify-end left-0 top-0 w-full z-10")}>
                <Typography
                    className="font-medium text-lg text-white"
                    component="h3">
                    { city }
                </Typography>
                <span
                    className="bg-white mt-4 px-4 py-1 rounded-lg text-black">
                    { jobs } job{ jobs > 1 ? "s": "" }
                </span>
            </div>
        </Link>
    </li>
);

export default Card;