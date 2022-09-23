
import { Button, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

import Card from "src/components/account-page/card";
import Link from "src/components/link";

const Container = () => {

    return (
        <main>
            <section className="px-5 py-12 ">
                <Typography
                    component="h1"
                    className={classNames("font-bold text-xl sm:text-2xl md:text-3xl")}>
                    Olá, Foo boo
                </Typography>
                <div className="flex flex-wrap items-center mt-4">
                    <Typography 
                        component="h2"
                        className="font-semibold">
                        Foo boo
                    </Typography>
                    <span className={classNames(classes.email, `px-6 relative`)}>fooboo@gmail.com</span>
                    <Link className="text-black underline" href="profile">
                        Vá ao seu perfil
                    </Link>
                </div>
                <div className="flex flex-wrap items-stretch justify-between mt-8">
                    <Card 
                        href="/"
                        icon={<BadgeOutlinedIcon className="md:text-4xl" />}
                        title="Informações pessoais"
                    />
                    <Card 
                        href="/"
                        icon={<WorkspacePremiumOutlinedIcon className="md:text-4xl" />}
                        title="Crachás "
                    />
                    <Card 
                        href="/"
                        icon={<MoodOutlinedIcon className="md:text-4xl" />}
                        title="Referências "
                    />
                    <Card 
                        href="/"
                        icon={<PaymentOutlinedIcon className="md:text-4xl" />}
                        title="Pagamentos"
                    />
                    <Card 
                        href="/"
                        icon={<SecurityOutlinedIcon className="md:text-4xl" />}
                        title="Inicio de sessão e segurança"
                    />
                    <Card 
                        href="/"
                        icon={<NotificationsNoneOutlinedIcon className="md:text-4xl" />}
                        title="Notificações"
                    />
                </div>
                <div className="flex font-medium justify-center mt-8">
                    <Button className="text-black underline">Desativar conta</Button>
                </div>
            </section>
        </main>
    );
};

export default Container;