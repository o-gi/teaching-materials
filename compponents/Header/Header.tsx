import React, { FC } from "react";
import HeaderButton from "./Button";
import HeaderLogo from "./Logo";
import HeaderMenu from "./Menu";

const Header: FC = () => {
  return (
    <div className="header-container">
      <div>
        <HeaderLogo />
      </div>
      <div className="right">
        <HeaderMenu />
      </div>
      <div className="">
        <HeaderButton />
      </div>
    </div>
  );
};

export default Header;
