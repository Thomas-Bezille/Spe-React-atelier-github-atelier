import PropTypes from 'prop-types';
import { Icon, Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Header.scss';
import logo from '../../assets/img/logo-github.png';

const Header = ({
  searchValue,
  setSearchValue,
  handleSearchRepos,
  resetRepos,
}) => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSearchRepos(searchValue);
        }}
      >
        <Input icon placeholder="Rechercher..." iconPosition="left">
          <Icon name="search" />
          <input
            type="text"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </Input>
      </form>
      <div className="btn-container">
        <Link to="/">
          <Button className="btn" content="Accueil" />
        </Link>
        <Link to="/faq">
          <Button className="btn" content="Faq ?" />
        </Link>
        <Button
          primary
          className="btn"
          content="Réinitialiser"
          onClick={resetRepos}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  handleSearchRepos: PropTypes.func.isRequired,
  resetRepos: PropTypes.func.isRequired,
};

export default Header;
