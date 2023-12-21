import '../Header/header.css';
import headerlogo from '../../img/jbhunt-white-border.svg';

function Header() {
  return (
    <header>
        <a href="https://www.jbhunt.com/" target='_blank'>
          <img className="headerlogo" src={headerlogo} alt="Coyote Logistics" />
        </a>
    </header>
  );
}

export default Header;