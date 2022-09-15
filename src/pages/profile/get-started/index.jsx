import { useCallback, useMemo, useState } from "react"
import { Button, MobileStepper } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import classNames from "classnames"

import classes from "./styles.module.css"

import Address from "src/components/complete-page-components/address";
import DescrigeYourself from "src/components/complete-page-components/describe-yourself"
import GetStarted from "src/components/complete-page-components/get-started";
import MoreAboutYou from "src/components/complete-page-components/more-about-you";

const Container = () => {
    const [ activeStep, setActiveStep ] = useState(0);

    const addressMemo = useMemo(() => <LocalizationProvider dateAdapter={AdapterMoment}><Address /></LocalizationProvider>, []);
    const descrigeYourself = useMemo(() => <DescrigeYourself />, []);
    const getStartedMemo = useMemo(() => <GetStarted />, []);
    const moreAboutYouMemo = useMemo(() => <MoreAboutYou />, []);

    const elements = [ getStartedMemo, addressMemo, moreAboutYouMemo, descrigeYourself ];

    const handleNext = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, []);

    const handleBack = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }, []);


    return (
        <main>
            <div className={classNames(classes.container, "mx-auto pb-12")}>
                { elements[activeStep] }
                <div className="px-5">
                    <MobileStepper
                        classes={{ progress: "grow" }}
                        variant="progress"
                        steps={6}
                        position="static"
                        activeStep={activeStep}
                        sx={{ flexGrow: 1 }}
                    />
                    { activeStep === 0 ? (
                        <Button 
                            className="bg-neutral-800 mt-3 py-3 text-white w-full hover:bg-neutral-700"
                            onClick={handleNext}>
                            Vamos começar!
                        </Button>
                    ) : (
                        <div className=" flex items-center justify-between mt-3">
                            <Button 
                                className="text-black"
                                disabled={activeStep === 0}
                                onClick={handleBack}>
                                Voltar
                            </Button>
                            <Button 
                                className="bg-neutral-800 py-1 text-white hover:bg-neutral-700"
                                disabled={activeStep === 5}
                                onClick={handleNext}>
                                Próximo 
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Container;