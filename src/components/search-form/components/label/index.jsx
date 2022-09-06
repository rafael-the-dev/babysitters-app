import Typography from "@mui/material/Typography";
import classNames from "classnames"

const Label = ({ children, className, htmlFor }) => (
    <Typography 
        className={classNames("font-medium", className)}
        component="label" 
        htmlFor={htmlFor}>
        { children }
    </Typography>
);

export default Label;