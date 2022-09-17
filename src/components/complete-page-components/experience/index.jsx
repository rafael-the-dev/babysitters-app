import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { MenuItem } from "@mui/material";

import Button from '../button';
import Checkbox from "src/components/checkbox";
import Input from "src/components/default-input"
import Legend from "../legend-container";

const Container = ({ onSubmit }) => {
    const [ anos, setAnos ] = useState(0)
    const [ criancasComNecessidadesEspecias, setCriancasComNecessidadesEspecias ] = useState(false);
    const [ faixaEtaria, setFaixaEtaria ] = useState([]);

    const id = useId();
    const list = useRef([
        "Bebé", "Criança (Ensino Básico)", "Criança (Creche)", "Adolescente", "Criança (Pré-escolar)"
    ]);

    const legendMemo = useMemo(() => (
        <Legend label="Conte-nos mais sobre sua experiência" />
    ), []);

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
        <label
            className="block font-semibold mt-8 mb-3 lg:mt-12"
            htmlFor="anos-experiencia">
           Experiência
        </label>
    ), []);

    const anosChangeHandler = useCallback((e) => {
        setAnos(e.target.value)
    }, []);

    const submitHandler = useCallback(() => {
        return new Promise((resolve, reject) => {
            resolve("")
        })
    }, [ ]);

    useEffect(() => {
        onSubmit.current = submitHandler;
    }, [ onSubmit, submitHandler ])

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
        <div className="flex flex-wrap justify-between mt-4">
            {
                list.current.map((item, index) => {
                    const selected = isSelected(item);
                    return (
                        <Button
                            key={`${id}${index}`}
                            onClick={selected ? removeItem(item) : addItem(item)}
                            selected={selected}>
                            { item }
                        </Button>
                    )
                })
            }
        </div>
    ), [ addItem, id, isSelected, removeItem ]);
    
    const checkboxLabel = useMemo(() => (
        <label
            className="block font-semibold mt-8 mb-3"
            htmlFor="criacas-com-necessidades-especias">
            Crianças com necessidades especiais
        </label>
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
        <section className="px-5 py-12">
            <form>
                <fieldset>
                    { legendMemo }
                    { anosExperienciaLabel }
                    { anosExperienciaMemo }
                    { faixaEtariaLabel }
                    { faixaEtariaMemo }
                    { checkboxLabel }
                    { checkboxMemo }
                </fieldset>
            </form>
        </section>
    );
};

export default Container;