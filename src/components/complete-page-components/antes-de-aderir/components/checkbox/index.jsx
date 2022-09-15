import { useCallback, useEffect, useState} from "react"


import Checkbox from "src/components/checkbox"

const CheckboxContainer = ({ checkedRef }) => {
    const [ checked, setChecked ] = useState(false);

    const toggle = useCallback(() => setChecked(b => !b), [])

    useEffect(() => {
        checkedRef.current = checked;
    }, [ checked, checkedRef ]);
    
    return (
        <Checkbox 
            checked={checked}
            label="Quero receber promoções, ofertas especiais e questionários da Babysits."
            onChange={toggle}
        />
    );
};

export default CheckboxContainer;