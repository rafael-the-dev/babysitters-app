import IconButton from "@mui/material/IconButton"

const SocialMedia = ({ children, href }) => (
    <a 
        className='mr-4 last:mr-0'
        href={href} 
        rel="noreferrer" 
        target="_blank">
        <IconButton className="bg-white text-cyan-700">
            { children }
        </IconButton>
    </a>
);

export default SocialMedia;