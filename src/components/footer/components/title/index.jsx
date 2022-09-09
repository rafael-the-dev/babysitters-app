import { Hidden, Typography } from "@mui/material"

const Title = ({ children }) => (
    <Hidden lgDown>
        <Typography
            component="h2"
            className="font-semibold mb-3 text-lg">
            { children }
        </Typography>
    </Hidden>
);

export default Title;