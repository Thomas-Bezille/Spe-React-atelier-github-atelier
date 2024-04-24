import { useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';

import './App.scss';
import Faq from '../Faq/Faq';

function App() {
  // Variable de state pour les repos -> default []
  const [repos, setRepos] = useState([]);
  // Variable de state pour le contrôle de l'input -> default ''
  const [inputSearch, setInputSearch] = useState('');
  // Variable de state pour le nombre de résultat(s) -> default 0
  const [countRepos, setCountRepos] = useState(0);

  const loadRepos = (inputValue) => {
    axios
      .get(`https://api.github.com/search/repositories?q=${inputValue}`)
      .then((response) => {
        const newRepoArray = [];
        response.data.items.forEach((currentItem) => {
          if (currentItem.full_name.includes(inputValue)) {
            newRepoArray.push(currentItem);
          }
        });
        setRepos(newRepoArray);
        setCountRepos(response.data.total_count);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <div className="App">
      <Header
        searchValue={inputSearch}
        setSearchValue={setInputSearch}
        handleSearchRepos={loadRepos}
      />
      <Message count={countRepos} />
      <ReposResults data={repos} />
    </div>
  );
}

export default App;
