import { FC } from "react";

const HeaderButton: FC = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <button
      type="button"
      className="header-button"
      onClick={() => handleClick()}
    >
      LINEに追加
    </button>
  );
};

export default HeaderButton;
