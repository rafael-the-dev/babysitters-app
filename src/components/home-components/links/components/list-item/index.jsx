import classNames from "classnames"

import classes from "./styles.module.css";

import Link from "src/components/link"

const ListItem = ({ href, label }) => (
    <li className={classNames(classes.container, `mb-3 relative pl-6 before:absolute before:bg-text-black first:pl-0`)}>
        <Link 
            className="text-black hover:underline"
            href={href}>
            { label }
        </Link>
    </li>
);

export default ListItem;