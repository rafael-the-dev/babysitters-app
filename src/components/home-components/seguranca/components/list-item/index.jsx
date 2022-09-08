import classNames from "classnames";
import Image from 'next/image';

import classes from "./styles.module.css"

const ListItem = ({ url, text}) => {

    return (
        <li className={classNames(classes.listItem, 'font-medium flex items-center mb-4 sm:text-left')}>
            <div className={classNames(classes.imageContainer, 'mr-4 relative')}>
                <Image
                    alt=""
                    layout="fill"
                    src={url} 
                />
            </div>
            { text }
        </li>
    );
};

export default ListItem;