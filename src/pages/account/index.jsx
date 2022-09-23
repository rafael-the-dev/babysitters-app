
import { Typography } from "@mui/material";
import classNames from "classnames"

import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

import Card from "src/components/account-page/card";

const Container = () => {

    return (
        <main>
            <section className="px-4 py-12">
                <Typography
                    component="h1"
                    className={classNames("font-bold text-lg")}>
                    Olá, Foo boo
                </Typography>
                <div className="flex flex-wrap items-stretch justify-between mt-8">
                    <Card 
                        href="/"
                        icon={<BadgeOutlinedIcon />}
                        title="Informações pessoais"
                    />
                    <Card 
                        href="/"
                        icon={<WorkspacePremiumOutlinedIcon />}
                        title="Crachás "
                    />
                    <Card 
                        href="/"
                        icon={<MoodOutlinedIcon />}
                        title="Referências "
                    />
                    <Card 
                        href="/"
                        icon={<PaymentOutlinedIcon />}
                        title="Pagamentos"
                    />
                    <Card 
                        href="/"
                        icon={<SecurityOutlinedIcon />}
                        title="Inicio de sessão e segurança"
                    />
                    <Card 
                        href="/"
                        icon={<NotificationsNoneOutlinedIcon />}
                        title="Notificações"
                    />
                </div>
            </section>
        </main>
    );
};

export default Container;