import classNames from "classnames";

import Link from "src/components/link";

import classes from "./styles.module.css";

const ListItem = ({ href, label }) => {

    return (
        <li className={classNames(classes.listItem, "list-itema px-5 py-2 w-full hover:bg-red-500")}>
            <Link 
                className="text-black"
                href={href}>
                { label }
            </Link>
        </li>
    );
};

export default ListItem;