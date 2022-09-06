import { Checkbox, FormControlLabel } from "@mui/material";
import classNames from "classnames";

const CheckboxContainer = ({ className, checked, label, onChange }) => (
    <FormControlLabel 
        className={classNames("m-0", className)}
        control={
            <Checkbox 
                className="p-[5px]" 
                checked={checked} 
                onChange={onChange} 
            />
        } 
        label={label}
    />
);

export default CheckboxContainer;