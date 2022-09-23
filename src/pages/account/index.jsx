
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
            <section className="px-5 py-12 ">
                <Typography
                    component="h1"
                    className={classNames("font-bold text-xl sm:text-2xl md:text-3xl")}>
                    Olá, Foo boo
                </Typography>
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
            </section>
        </main>
    );
};

export default Container;