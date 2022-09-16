import { useCallback, useMemo, useState } from "react"
import { Button, MobileStepper } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import classNames from "classnames"

import classes from "./styles.module.css"

import Address from "src/components/complete-page-components/address";
import Availability from "src/components/complete-page-components/availability";
import AboutYourself from "src/components/complete-page-components/about-yourself"
import BabysittingLocation from "src/components/complete-page-components/babysitting-location"
import ConfortableWith from "src/components/complete-page-components/comfortable-with"
import Experience from "src/components/complete-page-components/experience"
import AppliesToYourself from "src/components/complete-page-components/applies-to-yourself"
import DescrigeYourself from "src/components/complete-page-components/describe-yourself"
import GetStarted from "src/components/complete-page-components/get-started";
import HourRate from "src/components/complete-page-components/hourly-rate"
import MoreAboutYou from "src/components/complete-page-components/more-about-you";
import Notification from "src/components/complete-page-components/notifications";
import ProfilePhoto from "src/components/complete-page-components/profile-photo"
import Skills from "src/components/complete-page-components/skills"

const Container = () => {
    const [ activeStep, setActiveStep ] = useState(0);

    const addressMemo = useMemo(() => <LocalizationProvider dateAdapter={AdapterMoment}><Address /></LocalizationProvider>, []);
    const appliesToYourselfMemo = useMemo(() => <AppliesToYourself />, []);
    const aboutYourselfMemo = useMemo(() => <AboutYourself />, []);
    const availabilityMemo = useMemo(() => <Availability />, []);
    const babysittingLocationMemo = useMemo(() => <BabysittingLocation />, []);
    const confortableWithMemo = useMemo(() => <ConfortableWith />, []);
    const descrigeYourself = useMemo(() => <DescrigeYourself />, []);
    const experienceMemo = useMemo(() => <Experience />, []);
    const getStartedMemo = useMemo(() => <GetStarted />, []);
    const hourRateMemo = useMemo(() => <HourRate />, []);
    const moreAboutYouMemo = useMemo(() => <MoreAboutYou />, []);
    const notificationMemo = useMemo(() => <Notification />, []);
    const profilePhotoMemo = useMemo(() => <ProfilePhoto />, []);
    const skillsMemo = useMemo(() => <Skills />, []);

    const elements = [ getStartedMemo, addressMemo, moreAboutYouMemo, descrigeYourself, appliesToYourselfMemo,
        skillsMemo, experienceMemo, babysittingLocationMemo, confortableWithMemo, hourRateMemo, availabilityMemo,
        aboutYourselfMemo, notificationMemo, profilePhotoMemo ];

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
                        steps={elements.length}
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
                                className="bg-neutral-800 py-1 text-white hover:bg-neutral-700 md:py-2 md:px-4"
                                disabled={activeStep === elements.length - 1}
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