import { useCallback, useEffect, useMemo, useState } from "react"
import moment from "moment"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import HelperText from "src/components/helper-text";
import Input from "src/components/default-input"
import Label from "../label";

const Container = () => {
    const [ date, setDate ] = useState(moment('2014-08-18T21:11:54'));
    const [ value, setValue ] = useState("Porto, Portugal");

    return (
        <div>
            <div className="flex flex-col mt-8">
                <Label
                    htmlFor="address-input">
                    Morada
                </Label>
                <Input 
                    className="mt-2 mb-2"
                    id="address-input"
                    label="Introduza a sua morada"
                    value={value}
                />
            </div>
            <div className="flex flex-col mt-8">
                <Label
                    htmlFor="birth-date">
                    Data de nascimento
                </Label>
                <DesktopDatePicker
                    className="mt-4 mb-2"
                    label="MM/DD/YYYY"
                    inputFormat="MM/DD/YYYY"
                    value={date}
                    renderInput={(params) => <Input className="my-2" id="birth-date" {...params} />}
                />
                <HelperText
                    htmlFor="birth-date">
                    Peça permissão aos seus pais se tiver menos de 18 anos. As babysitters devem ter 14 anos ou mais.
                </HelperText>
            </div>
        </div>
    );
};

export default Container;