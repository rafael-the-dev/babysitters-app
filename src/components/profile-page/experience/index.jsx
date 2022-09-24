import { useCallback, useId, useMemo, useRef, useState } from "react";
import { MenuItem } from "@mui/material";

import Chip from '../chip';
import Checkbox from "src/components/checkbox";
import Input from "src/components/default-input"
import Legend from "../legend";
import Label from "../label";

const Container = () => {
    const [ anos, setAnos ] = useState(0)
    const [ criancasComNecessidadesEspecias, setCriancasComNecessidadesEspecias ] = useState(false);
    const [ faixaEtaria, setFaixaEtaria ] = useState([]);

    const id = useId();
    const list = useRef([
        "Bebé", "Criança (Ensino Básico)", "Criança (Creche)", "Adolescente", "Criança (Pré-escolar)"
    ]);

    const faixaEtariaLabel = useMemo(() => (
        <label
            className="block font-semibold mt-8">
            Experiência com a faixa etária
        </label>
    ), []);

    
    const isSelected = useCallback((item) => {
        return faixaEtaria.includes(item)
    }, [ faixaEtaria ]);

    const addItem = useCallback(prop => () => {
        setFaixaEtaria(currentList => [ ...new Set([ ...currentList, prop])]);
    }, [])

    const removeItem = useCallback(prop => () => {
        setFaixaEtaria(currentList => currentList.filter(item => item !== prop));
    }, []);

    const anosExperienciaLabel = useMemo(() => (
        <Label
            htmlFor="anos-experiencia">
           Experiência
        </Label>
    ), []);

    const anosChangeHandler = useCallback((e) => {
        setAnos(e.target.value)
    }, []);

    const anosExperienciaMemo = useMemo(() => (
        <Input
            fullWidth
            id="anos-experiencia"
            onChange={anosChangeHandler}
            value={anos}
            select>
            {
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
                    <MenuItem key={`${id}${index}`} value={item}>
                        {
                            index === 0 ? "< 1 ano" : `> ${item} ano${item > 1 ? "s" : ""}`
                        }
                    </MenuItem>
                ))
            }
        </Input>
    ), [ anos, anosChangeHandler, id ])

    const faixaEtariaMemo = useMemo(() => (
        <div className="flex flex-wrap mt-4">
            {
                list.current.map((item, index) => {
                    const selected = isSelected(item);
                    return (
                        <Chip
                            key={`${id}${index}`}
                            onClick={selected ? removeItem(item) : addItem(item)}
                            selected={selected}
                            label={item}
                        />
                    )
                })
            }
        </div>
    ), [ addItem, id, isSelected, removeItem ]);
    
    const checkboxLabel = useMemo(() => (
        <Label
            className=" mt-4"
            htmlFor="criacas-com-necessidades-especias">
            Crianças com necessidades especiais
        </Label>
    ), []);

    const changeHandler = useCallback(() => setCriancasComNecessidadesEspecias(b => !b), []);

    const checkboxMemo = useMemo(() => (
        <Checkbox 
            checked={criancasComNecessidadesEspecias}
            id="criacas-com-necessidades-especias"
            label="Tenho experiência com crianças com necessidades especiais. Por exemplo, com crianças com problemas de comportamento, deficiência mental ou doença crónica."
            onChange={changeHandler}
        />
    ), [ criancasComNecessidadesEspecias, changeHandler ])

    return (
        <fieldset className="mt-12">
            { anosExperienciaLabel }
            { anosExperienciaMemo }
            { faixaEtariaLabel }
            { faixaEtariaMemo }
            { checkboxLabel }
            { checkboxMemo }
        </fieldset>
    );
};

export default Container;