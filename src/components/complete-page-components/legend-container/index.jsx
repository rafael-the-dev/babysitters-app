import classNames from "classnames";

import classes from "./styles.module.css";

const Legend = ({ children, className, label }) => (
    <div className={classNames(classes.legendContainer, "bg-cyan-200 bg-no-repeat py-8", className)}>
        <legend className="font-bold text-center text-cyan-700 text-xl">
            { label }
        </legend>
        { children }
    </div>
);

export default Legend;