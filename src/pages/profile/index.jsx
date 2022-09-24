import classNames from 'classnames';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import classes from "./styles.module.css"

import AboutYourself from "src/components/profile-page/about-yourself";
import Availability from "src/components/profile-page/availability";
import AppliesToYou from "src/components/profile-page/applies-to-you";
import Address from "src/components/profile-page/address";
import BabysittingLocation from "src/components/profile-page/babysitting-location"
import ComfortableWith from "src/components/profile-page/comfortable-with";
import DescribeYourself from "src/components/profile-page/describe-yourself"
import Education from "src/components/profile-page/education";
import Experience from "src/components/profile-page/experience"
import HourlyRate from "src/components/profile-page/hourly-rate"
import Skills from "src/components/profile-page/skills"

const Container = () => {

    return (
        <main>
            <form className={classNames("px-5 py-12", classes.form)}>
                <AboutYourself />
                <LocalizationProvider dateAdapter={AdapterMoment}><Address /></LocalizationProvider>
                <DescribeYourself />
                <Education />
                <AppliesToYou />
                <Skills />
                <ComfortableWith />
                <BabysittingLocation />
                <HourlyRate />
                <Availability />
                <Experience />
            </form>
        </main>
    )
};

export default Container;