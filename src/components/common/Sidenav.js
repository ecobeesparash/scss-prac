import React from "react";
import Menubutton from "../core/MenuButton";
import "../../assets/utils.scss";
import Icons from "../../assets/Icons";
import Img from "../../assets/logo.png";

function Sidenav() {
  return (
    <>
      <section className="o-sidenav__section px-2 py-3  w-14 bgcolor-bg-primary d-flex direction-column">
        <p className="m-logo__text mb-4 d-flex items-center">
          <img className="a-logoImg__img  w-20 " src={Img} alt="logo" />
          &nbsp;
          <span className="a-logoName__text pl-1 fs-small">Dakota</span>
        </p>

        <ul className="m-navMenu__list ">
          <Menubutton title={"Overview"} icon={Icons.HomeIcon} />
          <Menubutton title="Competition" icon={Icons.FolderIcon} />
          <Menubutton title="Timer" icon={Icons.MailIcon} notify={10} />
          <Menubutton title="Energy" icon={Icons.ReportIcon} />
          <Menubutton title="Calendar" icon={Icons.TicketIcon} />
          <Menubutton title="Distances" icon={Icons.FolderIcon} />
          <Menubutton title="Profile" icon={Icons.FolderIcon} />
          <Menubutton title="Settings" icon={Icons.FolderIcon} />
        </ul>

        <ul className="m-profileSetting__list mt-auto">
          <Menubutton title={"Settings"} icon={Icons.SettingIcon} />
          <Menubutton title={"Logout"} icon={Icons.LogoutIcon} />
        </ul>
      </section>
    </>
  );
}

export default Sidenav;
