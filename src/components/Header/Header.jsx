import { Icon, Input } from 'semantic-ui-react';

import './Header.scss';
import logo from '../../assets/img/logo-github.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <form className="form">
        <Input icon placeholder="Rechercher..." iconPosition="left">
          <Icon name="search" />
          <input />
        </Input>
      </form>
    </header>
  );
};

export default Header;
