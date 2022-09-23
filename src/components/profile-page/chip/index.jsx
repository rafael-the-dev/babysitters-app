import Chip from "@mui/material/Chip";
import classNames from "classnames";

const Container = ({ label, selected  }) => (
    <Chip 
        className={classNames(
            "font-medium mr-4 mb-3",
            selected ? "bg-cyan-700" : "bg-cyan-400"
        )}
        label={label}
    />
);

export default Container;