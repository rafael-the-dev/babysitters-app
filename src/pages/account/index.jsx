import { useContext } from "react"
import { Button, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";
import lang from './lang.json';

import { AppContext } from "src/context"

import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

import Card from "src/components/account-page/card";
import Link from "src/components/link";

const Container = () => {
    const { language } = useContext(AppContext);

    return (
        <main>
            <section className="px-5 py-12 ">
                <Typography
                    component="h1"
                    className={classNames("font-bold text-xl sm:text-2xl md:text-3xl")}>
                    { lang[language].greeting } Foo boo
                </Typography>
                <div className="flex flex-wrap items-center mt-4">
                    <Typography 
                        component="h2"
                        className="font-semibold">
                        Foo boo
                    </Typography>
                    <span className={classNames(classes.email, `px-6 relative`)}>fooboo@gmail.com</span>
                    <Link className="text-black underline" href="profile">
                        { lang[language]["profile-link"] }
                    </Link>
                </div>
                <div className="flex flex-wrap items-stretch justify-between mt-8">
                    <Card 
                        href="/account/personal-information"
                        icon={<BadgeOutlinedIcon className="md:text-4xl" />}
                        title={lang[language].list[0]}
                    />
                    <Card 
                        href="/"
                        icon={<WorkspacePremiumOutlinedIcon className="md:text-4xl" />}
                        title={lang[language].list[1]}
                    />
                    <Card 
                        href="/references"
                        icon={<MoodOutlinedIcon className="md:text-4xl" />}
                        title={lang[language].list[2]}
                    />
                    <Card 
                        href="/account/payments"
                        icon={<PaymentOutlinedIcon className="md:text-4xl" />}
                        title={lang[language].list[3]}
                    />
                    <Card 
                        href="/account/login-and-security"
                        icon={<SecurityOutlinedIcon className="md:text-4xl" />}
                        title={lang[language].list[4]}
                    />
                    <Card 
                        href="/account/notifications"
                        icon={<NotificationsNoneOutlinedIcon className="md:text-4xl" />}
                        title={lang[language].list[5]}
                    />
                </div>
                <div className="flex font-medium justify-center mt-8">
                    <Button className="text-black underline">
                        { lang[language]["delete-account"] }
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default Container;