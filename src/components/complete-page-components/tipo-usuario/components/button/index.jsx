
import DefaultButton from "@mui/material/Button"

const Button = ({ children, onClick }) => (
    <DefaultButton
        className="bg-neutral-800 mb-3 normal-case py-3 rounded-none text-white hover:bg-neutral-700  w-full"
        onClick={onClick}
        variant="contained">
        { children }
    </DefaultButton>
);

export default Button;