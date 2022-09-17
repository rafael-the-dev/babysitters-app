import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Button, CircularProgress, MobileStepper } from "@mui/material";
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
import ProfilePhoto from "src/components/complete-page-components/profile-photo";
import ProfileVisibility from "src/components/complete-page-components/profile-visibility"
import Skills from "src/components/complete-page-components/skills"

const Container = () => {
    const [ properties, setProperties ] = useState({
        activeStep: 0,
        disabled: false,
        loading: false
    });

    const { activeStep, disabled, loading } = properties;

    const disabledRef = useRef(false);

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
    const profileVisibilityMemo = useMemo(() => <ProfileVisibility />, []);
    const skillsMemo = useMemo(() => <Skills />, []);

    const elements = [ getStartedMemo, addressMemo, moreAboutYouMemo, descrigeYourself, appliesToYourselfMemo,
        skillsMemo, experienceMemo, babysittingLocationMemo, confortableWithMemo, hourRateMemo, availabilityMemo,
        aboutYourselfMemo, notificationMemo, profilePhotoMemo, profileVisibilityMemo ];

    const handleNext = useCallback(() => {
        setProperties((props) => ({ ...props, activeStep: props.activeStep + 1}));
    }, []);

    const handleBack = useCallback(() => {
        setProperties((props) => ({ ...props, activeStep: props.activeStep - 1}));
    }, []);

    const submitHandler = useCallback((e) => {
        e.preventDefault();

        if(!disabledRef.current) {
            setProperties(props => ({ ...props, loading: true }))
            setTimeout(() => {
                setProperties(props => ({ ...props, activeStep: props.activeStep + 1, loading: false }))
            }, 3000)
        }
    }, [ ]);

    useEffect(() => {
        disabledRef.current = disabled;
    }, [ disabled ])

    return (
        <main>
            <form
                className={classNames(classes.container, "mx-auto pb-12")}
                onSubmit={submitHandler}>
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
                            type="submit">
                            { loading ? "Loading..." : "Vamos começar!" }
                        </Button>
                    ) : (
                        <div className=" flex items-center justify-between mt-3">
                            <Button 
                                className="text-black"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                type="button">
                                Voltar
                            </Button>
                            <Button 
                                className="bg-neutral-800 py-1 text-white hover:bg-neutral-700 md:py-2 md:px-4"
                                disabled={(activeStep === elements.length - 1) || disabled}
                                type="submit">
                                { loading ? <CircularProgress className="text-white" size={22} /> : "Próximo" } 
                            </Button>
                        </div>
                    )}
                </div>
            </form>
        </main>
    );
};

export default Container;