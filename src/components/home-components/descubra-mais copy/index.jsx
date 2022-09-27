import { useCallback, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import Button from "@mui/material/Button";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Carousel from "src/components/carousel"
import Link from "src/components/link";
import Card from "./components/card";
import api from '../../../services/api'

const BabysittersContainer = () => {
    // States
    const [babysitterLocStatus, setBabysitterLocStatus] = useState({
        list : null
    });

    const resizeHelper = useCallback(() => {
        const { innerWidth } = window;

        if((innerWidth < 600) && (innerWidth > 455)) {
            return innerWidth / 2.4
        }
    }, [])

    useEffect(() => {

        async function loadBabysitterInMyLocationAsync(){
            const response = await api.get('babysitter/location/lisbon');

            setBabysitterLocStatus({ list : response.data });
        }

        loadBabysitterInMyLocationAsync();

    }, []);

    return (
        <div className="px-5 pb-12 pt-20">
            <Link href="/babysitter">
                <Button
                    className="capitalize font-bold mb-4 text-left sm:text-lg text-black"
                    endIcon={<PlayArrowIcon />}>
                    Conheça babysitters selecionadas em sua área
                </Button>
            </Link>
            {
                Boolean(babysitterLocStatus.list) && (
                <Carousel 
                    helper={resizeHelper}
                    spacing={{ xs: { gap: 80, width: 1.4 }, sm: { gap: 80, width: 2.2 }, md: { gap: 80, width: 2.8 }, xl: { gap: 80, width: 3.3 }, '2xl': { gap: 80, width: 4.3 } }}>
                    {
                        babysitterLocStatus.list.splice(0, 10).map((item) => (
                            <Card { ...item } key={uuidv4()} />
                        ))
                    }
                </Carousel>
            )}
            <Link className="block font-medium mt-6 text-black text-center underline" href="babysitter">
                Ver todas 10 000 babysitters disponiveis
            </Link>
        </div>
    );
};

export default BabysittersContainer;