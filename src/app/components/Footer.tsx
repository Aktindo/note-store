import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="footer text-white opacity-50 fixed m-5 bottom-0 right-0">
      Aktindo | {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
