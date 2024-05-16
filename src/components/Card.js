import { IMG_URL } from '../constants/';

const Card = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, areaName, avgRating, costForTwo, slaString, locality } = resData;

  // Function to generate the star rating based on avgRating
  const generateStarRating = (rating) => {
    let stars = '';
    for (let i = 1; i <= Math.floor(rating); i++) {
      stars += '⭐';
    }
    return stars;
  };

  return (
    <div className="h-auto w-auto  m-4">
      <div className="h-80 m-1 p-1 w-60 rounded-lg overflow-hidden">
        <img
          className="h-52 w-full rounded-lg "
          src={IMG_URL + cloudinaryImageId}
        />
        <h4 className="font-semibold">{name}</h4>
        <h6 className="text-sm font-normal">{cuisines.join(",")}</h6>
        <h8 className="text-xs">{locality}</h8>
        <h8 className="text-xs m-1">{areaName}</h8>
        <h7 className="text-sm">{slaString}</h7>
        <span>
          <h6 className="text-sm">{generateStarRating(avgRating)} {avgRating}</h6>
          <h6 className="text-sm">{costForTwo}</h6>
        </span>
      </div>
    </div>
  );
};

export default Card;
