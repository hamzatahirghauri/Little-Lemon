import {
  MdOutlineStarOutline,
  MdOutlineStarHalf,
  MdOutlineStar,
} from "react-icons/md";

const Stars = ({ className, rating, id }) => {
  return (
    <div className={className}>
      {[...Array(5)].map((nullishItem, index) => {
        const key = id + index;

        let starsLeft = rating - index;

        // Case: empty star */
        if (starsLeft <= 0) {
          return <MdOutlineStarOutline key={key} />;
          // Case: half filled star
        } else if (starsLeft > 0 && starsLeft < 1) {
          starsLeft = Math.floor(starsLeft);
          return <MdOutlineStarHalf key={key} />;
          // Case: fully filled star */
        } else {
          starsLeft -= 1;
          return <MdOutlineStar key={key} />;
        }
      })}
    </div>
  );
};

export default Stars;
