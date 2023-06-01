import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="header mb-10 text-5xl">
      <p className="header__title font-bold">Note Store.</p>
    </div>
  );
};

export default Header;
