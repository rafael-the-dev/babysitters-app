
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Link from "src/components/link";
import ListItem from "./components/list-item";
import SocialMediaLink from "./components/social-media"

const Footer = () => {

    return (
        <footer className="bg-cyan-200 flex flex-col items-center px-5 pt-8 pb-12">
            <div>
                <div>
                    <ul className="flex flex-wrap justify-center">
                        <ListItem href="/" label="Como funciona" />
                        <ListItem href="/" label="Ajuda" />
                        <ListItem href="/" label="Privacidade" />
                        <ListItem href="/" label="Termos" />
                        <ListItem href="/" label="Preços" />
                        <ListItem href="/" label="Informação sobre a empresa" />
                        <ListItem href="/" label="Babysits para Empresas" />
                    </ul>
                </div>
            </div>
            <ul className="flex justify-center mt-8">
                <SocialMediaLink href="#" ><FacebookIcon /></SocialMediaLink>
                <SocialMediaLink href="#" ><InstagramIcon /></SocialMediaLink>
                <SocialMediaLink href="#" ><TwitterIcon /></SocialMediaLink>
                <SocialMediaLink href="#" ><LinkedInIcon /></SocialMediaLink>
            </ul>
        </footer>
    );
};

export default Footer;