
import classNames from "classnames";

import classes from "./styles.module.css"

import Babysitters from "src/components/home-components/descubra-mais copy";
import ComoFunciona from "src/components/como-funciona";
import DescubraMais from "src/components/home-components/descubra-mais";
import Seguranca from "src/components/home-components/seguranca";

const Home = () => {

    return (
        <main>
            <section>
                <div className={classNames(classes.videoWrapper, `w-full`)}>
                    <video autoPlay className={classNames(classes.video, `h-full object-cover w-full`)} loop muteds>
                        <source src="https://cdn.babysits.com/content/global/hero/european/babysits_single_scene.mp4" type="video/mp4" />
                        <source src="https://cdn.babysits.com/content/global/hero/european/babysits_single_scene.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
            <Babysitters />
            <Seguranca />
            <ComoFunciona />
            <DescubraMais />
        </main>
    );
};

export default Home;