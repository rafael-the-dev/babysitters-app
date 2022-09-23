import { useCallback, useEffect, useMemo, useState } from "react"
import TextField from "@mui/material/TextField"
import moment from "moment"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Input from "src/components/default-input";
import Legend from "../legend-container"
import HelperText from "src/components/helper-text";

const Container = ({ onDisable, onSubmit }) => {
    const [ date, setDate ] = useState(moment('2014-08-18T21:11:54'));
    const [ error, setError ] = useState({
        date: false,
        value: false
    });
    const [ value, setValue ] = useState("");

    const legendMemo = useMemo(() => (
        <Legend label="Insira seus dados" />
    ), []);

    const moradaMemo = useMemo(() => (
        <label
            className="font-semibold"
            htmlFor="address-input">
            Morada
        </label>
    ), []);

    const moradaLabelHelperMemo = useMemo(() => (
        <HelperText
            htmlFor="address-input">
            A sua localização aproximada será exibida no seu perfil. Introduza a sua morada e selecione uma opção da lista.
        </HelperText>
    ), [])

    const handleDateChange = useCallback((newValue) => {
        setDate(newValue);
    }, []);

    const inputChangeHandler = useCallback(e => setValue(e.target.value), []);

    const checkError = useCallback(() => {

    }, []);

    const submitHandler = useCallback(() => {
        return new Promise((resolve, reject) => {
            if(error.date || error.value) {
                reject("Preencha todos os campos");
                return;
            }

            resolve("")
        })
    }, [ error ]);

    useEffect(() => {
        onSubmit.current = submitHandler;
    }, [ onSubmit, submitHandler ])

    useEffect(() => {
        setError(props => ({ ...props, value: !Boolean(value.trim())}))
    }, [ value ]);

    return (
        <div className="px-5 py-12">
            <fieldset>
                { legendMemo }
                { (error.date || error.value) && <label
                    className="block font-medium mt-8 mb-4 text-center text-red-600"
                    htmlFor="address-input">
                    Por favor preencha todos os campos.
                </label>}
                <div className="flex flex-col mt-8">
                    { moradaMemo }
                    <Input 
                        className="mt-2 mb-2"
                        id="address-input"
                        label="Introduza a sua morada"
                        onChange={inputChangeHandler}
                        value={value}
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
                    <HelperText
                        htmlFor="birth-date">
                        Peça permissão aos seus pais se tiver menos de 18 anos. As babysitters devem ter 14 anos ou mais.
                    </HelperText>
                </div>
            </fieldset>
        </div>
    );
};

export default Container;