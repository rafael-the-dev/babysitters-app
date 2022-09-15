import { useMemo, useState } from "react"

import PaginaInicial from "src/components/complete-page-components/antes-de-aderir"
import TipoUsuario from "src/components/complete-page-components/tipo-usuario"

const Container = () => {
    const [ page, setPage ] = useState("PAGINA_INICIAL");    

    const paginaIncial = useMemo(() => <PaginaInicial setState={setPage} />, []);
    const tipoUsuario = useMemo(() => <TipoUsuario />, []);

    return (
        <main>
            {
                page === "PAGINA_INICIAL" && paginaIncial
            }
            {
                page === "TIPO_USUARIO" && tipoUsuario
            }
        </main>
    );
};

export default Container;