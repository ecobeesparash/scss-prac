import React from "react";
import Icons from "../../../assets/Icons";
import Img from "../../../assets/logo.png";

function Head() {
  return (
    <>
      <div className="o-ordersHead__div w-100 h-10 d-flex items-center px-2 my-2">
        <h1 className="m-heading__text">User</h1>

        <ul className="m-userProfile__list d-flex justify-flex-end items-center">
          <li className="a-userNotification__icon fs-xlarge pr-1">
            {Icons.BellIcon}
          </li>

          <img className="a-userAvatar__img w-3 mx-1" src={Img} alt="" />

          <li className="a-userName__text">Parash Shahi</li>
        </ul>
      </div>
    </>
  );
}

export default Head;
