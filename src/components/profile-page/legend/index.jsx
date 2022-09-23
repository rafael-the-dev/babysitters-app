import classNames from "classnames";

const LegendContainer = ({ children, className }) => (
    <legend
        className={classNames("font-semibold mb-3", className)}>
        { children }
    </legend>
);

export default LegendContainer;