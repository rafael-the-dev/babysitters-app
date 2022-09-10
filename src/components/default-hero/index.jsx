import classNames from "classnames";

import classes from "./styles.module.css"

const DefaultHero = ({ children, className }) => (
    <section className={classNames(className, classes.container,
        "flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat px-5")}>
        { children }
    </section>
);

export default DefaultHero;