import Rating from "@mui/material/Rating"
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#59bec9',
    }
});

const RatingContainer = ({ value }) => (
    <StyledRating className="mr-3" name="read-only" value={value} readOnly />
);

export default RatingContainer;