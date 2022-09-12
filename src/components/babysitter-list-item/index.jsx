
import { Avatar, Typography } from "@mui/material"

const ListItem = ({ description, icon, title, titleComponent }) => {

    return (
        <li className="flex mb-4 last:mb-0">
            <Avatar 
                alt=""
                src={icon}
            />
            <div className="ml-3">
                <Typography
                    component={ titleComponent ?? "h3" }
                    className="font-semibold">
                    { title }
                </Typography>
                <Typography
                    className='leading-6 mt-1 text-sm'>
                    { description }
                </Typography>
            </div>
        </li>
    );
};

export default ListItem;