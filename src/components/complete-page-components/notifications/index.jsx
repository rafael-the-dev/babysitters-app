import { useCallback, useEffect, useMemo, useState } from "react"

import classes from "./styles.module.css";

import Legend from "../legend-container";
import Button from '../button'

const Container = ({ onSubmit }) => {
    const [ receiveNotification, setReceiveNotifcation ] = useState(null);

    const legendMemo = useMemo(() => (
        <Legend label="Quer receber notificações de novas famílias perto de você?" />
    ), []);


    const clickHandler = useCallback(prop => () => {
        setReceiveNotifcation(prop);
    }, []);

    const submitHandler = useCallback(() => {
        return new Promise((resolve, reject) => {
            resolve("")
        })
    }, [ ]);

    useEffect(() => {
        onSubmit.current = submitHandler;
    }, [ onSubmit, submitHandler ])

    return (
        <section className="px-5 py-12">
            <form>
                <fieldset>
                    { legendMemo }
                    <div className="flex flex-col mt-8 md:px-28 lg:mt-12">
                        <Button
                            className={classes.button}
                            onClick={clickHandler(true)}
                            selected={receiveNotification}>
                            Sim
                        </Button>
                        <Button
                            className={classes.button}
                            onClick={clickHandler(false)}
                            selected={!receiveNotification}>
                            Não
                        </Button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Container;