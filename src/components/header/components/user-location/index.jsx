import { Button } from "@mui/material"

import NearMeIcon from '@mui/icons-material/NearMe';

import Popover from "src/components/popover"

const Container = ({ onClick, onClose }) => {
    const clickHandler = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position)
            });
        } else {
           alert("Geolocation is not supported by this browser.");
        }
    };

    return (
        <Popover onClickRef={onClick} onCloseRef={onClose}>
            <Button 
                className='py-3 px-4 text-black' 
                onClick={clickHandler}
                startIcon={<NearMeIcon />}>
                Pesquisar nas proximidades
            </Button>
        </Popover>
    );
};

export default Container;