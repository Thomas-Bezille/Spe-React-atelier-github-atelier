import PropTypes from 'prop-types';
import { Icon, Input } from 'semantic-ui-react';

import './Header.scss';
import logo from '../../assets/img/logo-github.png';

const Header = ({ searchValue, setSearchValue, handleSearchRepos }) => {
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
    </header>
  );
};

Header.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  handleSearchRepos: PropTypes.func.isRequired,
};

export default Header;
