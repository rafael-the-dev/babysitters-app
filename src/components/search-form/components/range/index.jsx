import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles"

const CustomSlider = styled(Slider)(({ theme }) => ({
    color: "#394b59"
}));

const Range = ({ max, min, onChange, value }) => (
    <CustomSlider 
        min={min}
        max={max}
        onChange={onChange}
        value={value}
        valueLabelDisplay="auto" 
    /> 
);

export default Range; //