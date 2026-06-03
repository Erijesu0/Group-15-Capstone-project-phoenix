import planetLogo from "../assets/Nav Bar Top.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <img
        src={planetLogo}
        alt="Planet - Explore Earth"
        className="site-logo"
      />
    </header>
  );
};

export default Header;
