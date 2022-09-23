
import Availabity from "src/components/availability"
import Legend from "../legend"

const Container = () => {
    const disponibilidadeDiaria = {
        segunda: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        terca: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        quarta: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        quinta: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        sexta: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        sabado: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        },
        domingo: {
            fimDaTarte: false,
            manha: false,
            tarde: false,
            noite: false
        }
    };

    return (
        <fieldset className="mt-12">
            <Legend>
                Disponibilidade
            </Legend>
            <Availabity data={disponibilidadeDiaria} />
        </fieldset>
    );
};

export default Container;