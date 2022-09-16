import { useCallback, useMemo, useState } from "react"
import classNames from "classnames"

import classes from "./styles.module.css";

import Input from "src/components/default-input"

const Container = () => {
    const [ value, setValue ] = useState("");

    const leftChars = 200 - value.length;

    const videoMemo = useMemo(() => (
        <div className={classNames(classes.videoWrapper)}>
            <video autoPlay className="h-full object-cover w-full" loop muted  controlsList="nofullscreen nodownload noremoteplayback">
                <source src="https://cdn.babysits.com/content/page/profile-wizard/description.mp4" type="video/mp4" />
            </video>
        </div>
    ), []);

    const inputLabel = useMemo(() => (
        <label
            className="font-semibold"
            htmlFor="">
            Fale um pouco sobre si para que as famílias possam conhecê-lo.
        </label>
    ), [])

    const helperText = useMemo(() => (
        <label
            className="font-semibold mr-4"
            htmlFor="">
            Comunique apenas através de Babysits, não inclua detalhes de contacto. Mínimo de 200 caracteres.
        </label>
    ), []);

    const changeHandler = useCallback((e) => setValue(e.target.value.trim()), [])

    return (
        <div className="px-5 py-12 mb-12">
            { videoMemo }
            <div className="mt-12">
                { inputLabel }
                <Input 
                    className="mt-3 mb-2"
                    fullWidth
                    id="textarea-input"
                    multiline
                    minRows={6}
                    onChange={changeHandler}
                    value={value}
                />
                <div className="flex justify-between text-xs">
                    { helperText }
                    <div className="text-sm">
                        { leftChars } / 200
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;