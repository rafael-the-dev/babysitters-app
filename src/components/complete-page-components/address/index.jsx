import { useCallback, useMemo, useState } from "react"
import classNames from "classnames";
import TextField from "@mui/material/TextField"
import moment from "moment"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import classes from "./styles.module.css"

import Input from "src/components/default-input"

const Container = () => {
    const [ date, setDate ] = useState(moment('2014-08-18T21:11:54'));

    const legendMemo = useMemo(() => (
        <div className={classNames(classes.legendContainer, "bg-cyan-200 bg-no-repeat py-8")}>
            <legend className="font-bold text-center text-cyan-700 text-xl">
                Insira seus dados
            </legend>
        </div>
    ), []);

    const moradaMemo = useMemo(() => (
        <label
            className="font-semibold"
            htmlFor="address-input">
            Morada
        </label>
    ), []);

    const moradaLabelHelperMemo = useMemo(() => (
        <label
            className="text-sm sm:text-base"
            htmlFor="address-input">
            A sua localização aproximada será exibida no seu perfil. Introduza a sua morada e selecione uma opção da lista.
        </label>
    ), [])

    const handleDateChange = useCallback((newValue) => {
        setDate(newValue);
    }, []);

    return (
        <section className="px-5 py-12">
            <form>
                <fieldset>
                    { legendMemo }
                    <div className="flex flex-col mt-8">
                        { moradaMemo }
                        <Input 
                            className="mt-2 mb-2"
                            id="address-input"
                            label="Introduza a sua morada"
                        />
                        { moradaLabelHelperMemo }
                    </div>
                    <div className="flex flex-col mt-8">
                        <label
                            className="font-semibold"
                            htmlFor="birth-date">
                            Data de nascimento
                        </label>
                        <DesktopDatePicker
                            className="mt-4 mb-2"
                            label="MM/DD/YYYY"
                            inputFormat="MM/DD/YYYY"
                            value={date}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField className="my-2" id="birth-date" {...params} />}
                        />
                        <label
                            className="text-sm sm:text-base"
                            htmlFor="birth-date">
                            Peça permissão aos seus pais se tiver menos de 18 anos. As babysitters devem ter 14 anos ou mais.
                        </label>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Container;