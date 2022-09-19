import { useContext, useEffect } from "react"
import { useRouter } from "next/router";

import { FilterContext } from "src/context"

const Container = ({ children, className }) => {

    return (
        <main className={className}>
            { children }
        </main>
    );
};

export default Container;