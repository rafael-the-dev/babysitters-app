import { Typography } from "@mui/material"
import DefaultContainer from "src/components/reference-page/container"

const Container = () => {

    return (
        <DefaultContainer>
            <div className="border border-gray-300 border-solid mt-4 p-4">
                <Typography
                    component="h2"
                    className="font-semibold text-lg sm:text-xl">
                    Referências no seu perfil público
                </Typography>
                <Typography
                    className="font-medium mt-4">
                    Quando recebe uma referência, esta irá aparecer no seu perfil público. Se ignorar a referência, ela não irá aparecer no seu perfil e o utilizador que a escreveu não será informado. Lembre-se que uma referência só aparecerá no seu perfil público desde que o utilizador que a escreveu lhe tenha anexado uma foto!
                </Typography>
                <Typography
                    className="font-medium mt-4 text-sm">
                    Nenhuma referência recebida.
                </Typography>
            </div>
            <div className="border border-gray-300 border-solid mt-4 p-4">
                <Typography
                    component="h2"
                    className="font-semibold text-lg sm:text-xl">
                    Referências ignoradas
                </Typography>
                <Typography
                    className="font-medium mt-4">
                    Estas são as referências que ignorou. As mesmas não irão aparecer no seu perfil público.
                </Typography>
                <Typography
                    className="font-medium mt-4 text-sm">
                    Não tem referências ignoradas.
                </Typography>
            </div>
        </DefaultContainer>
    );
};

export default Container;