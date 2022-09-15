import classNames from "classnames";

import classes from "./styles.module.css";

const Container = ({ children, className }) => (
    <div className={classNames("bg-black relative w-full", classes.container, className)}>
        <div className={classNames(classes.label, `absolute bg-white font-medium left-1/2 px-4 py-2 top-1/2`)}>
            { children }
        </div>
    </div>
);

export default Container;