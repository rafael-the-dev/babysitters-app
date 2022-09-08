
import Babysitters from "src/components/home-components/descubra-mais copy";
import ComoFunciona from "src/components/como-funciona";
import DescubraMais from "src/components/home-components/descubra-mais";
import Seguranca from "src/components/home-components/seguranca";

const Home = () => {

    return (
        <main>
            <Babysitters />
            <Seguranca />
            <ComoFunciona />
            <DescubraMais />
        </main>
    );
};

export default Home;