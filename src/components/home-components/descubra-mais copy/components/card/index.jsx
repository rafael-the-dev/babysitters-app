import { Paper, Rating, Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import { styled } from '@mui/material/styles';

import classes from "./styles.module.css";

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#59bec9',
    }
});

const Card = ({ city, name, rating, url }) => {
    return (
        <Paper 
            component="li" 
            className="absolute h-full rounded-2xl"
            elevation={2}>
            <div className={classNames(classes.imageContainer, "relative w-full")}>
                <Image 
                    alt={name}
                    layout="fill"
                    src={url}
                />
            </div>
            <div className="text-center px-8 py-4">
                <Typography
                    className="font-bold"
                    component="h3">
                    { name }
                </Typography>
                <Typography
                    className="font-medium">
                    { city }
                </Typography>
                <StyledRating className="mt-3" name="read-only" value={rating} readOnly />
            </div>
        </Paper>
    );
};

export default Card;