import { Typography } from "@mui/material"
import DefaultContainer from "src/components/reference-page/container"

const Container = () => {

    return (
        <DefaultContainer>
            <div className="border border-gray-300 border-solid mt-4 p-4">
                <Typography
                    component="h2"
                    className="font-semibold text-lg sm:text-xl">
                   Referências antigas que escreveu
                </Typography>
                <Typography
                    className="font-medium mt-4 text-sm">
                    Ainda não escreveu nenhuma referência.
                </Typography>
            </div>
        </DefaultContainer>
    );
};

export default Container;