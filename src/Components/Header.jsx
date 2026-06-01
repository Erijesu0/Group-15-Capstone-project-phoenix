import planetLogo from '../assets/planet-logo.png';
import '../styles/Header.css' ;

const Header = () => {
  return (
    <header className="site-header">
      <img src={planetLogo} alt="Planet - Explore Earth" className="site-logo" />
    </header>
  );
};

export default Header;
