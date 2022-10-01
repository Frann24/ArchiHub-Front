import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faChevronUp, faXmark} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { changeShowMenu } from "../../../redux/slices/header/headerActions";

function BtnMenu() {
  const { menu } = useSelector((state) => state.header);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(changeShowMenu(!menu));
  };
  return (
    <div
      className="text-xl cursor-pointer"
      onClick={handleClick}
    >
      <FontAwesomeIcon className="font-bold " 
      /* icon={menu ?faChevronUp:faChevronDown} */ 
      /* icon={menu ? faXmark : faBars} */
      icon={faBars}
      />
    </div>
  );
}

export default BtnMenu;
