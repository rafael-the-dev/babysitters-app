import classNames from 'classnames';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import classes from "./styles.module.css"

import AboutYourself from "src/components/profile-page/about-yourself"
import AppliesToYou from "src/components/profile-page/applies-to-you";
import Address from "src/components/profile-page/address"
import ComfortableWith from "src/components/profile-page/confortable-with";
import DescribeYourself from "src/components/profile-page/describe-yourself"
import Education from "src/components/profile-page/education"
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
            </form>
        </main>
    )
};

export default Container;