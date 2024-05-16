import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "./useResMenu";
const RestrauntMenu = () => {
  
  const {resId} = useParams();
  // console.log(param = useParams());

  const {resInfo, menuInfo} = useResMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {name,cuisines,costForTwoMessage} = resInfo;

  return (
    <div className="menu">
      <h1 className="menu-list">{name}</h1>
      <h3 className="menu-list">{cuisines.join(",")}</h3>
      <h3 className="menu-list">{costForTwoMessage}</h3><br/>
      <h3 className="menu-list">MENU</h3> <br/>
      <ul className="menu-list">
        {menuInfo.map((item,id) => (
        <li key={id}>{item.card.info.name} Rs: - {item.card.info.price/100}</li>) )}
       
    </ul>
    </div>
  );
};

export default RestrauntMenu;
