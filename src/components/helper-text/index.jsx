import classNames from "classnames";

const HelperText = ({ children, className, htmlFor }) => (
    <label
        className={classNames("font-medium text-sm", className)}
        htmlFor={htmlFor}>
        { children }
    </label>
);

export default HelperText;