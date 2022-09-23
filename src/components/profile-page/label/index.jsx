import classNames from "classnames";

const Label = ({ children, className, htmlFor }) => (
    <label
        className={classNames("block font-semibold mb-3", className)}
        htmlFor={htmlFor}>
        { children }
    </label>
);

export default Label;