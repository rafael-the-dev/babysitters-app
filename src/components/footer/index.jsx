

import Link from "src/components/link";
import ListItem from "./components/list-item"

const Footer = () => {

    return (
        <footer className="bg-cyan-200 flex flex-col items-center px-5 pt-8 pb-12">
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
        </footer>
    );
};

export default Footer;