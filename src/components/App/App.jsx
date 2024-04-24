import { useState } from 'react';

import Header from '../Header/Header';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import dataRepos from '../../data/repos';

import './App.scss';

function App() {
  // Variable de state pour les repos -> default []
  const [repos, setRepos] = useState(dataRepos.items);
  // Variable de state pour le contrôle de l'input -> default ''
  const [inputSearch, setInputSearch] = useState('');

  const handleSearchRepos = (inputValue) => {
    const newRepoArray = [];
    const filteredRepos = repos.forEach((currentItem) => {
      if (currentItem.full_name.includes(inputValue)) {
        newRepoArray.push(currentItem);
      }
    });
    setRepos(newRepoArray);
  };

  return (
    <div className="App">
      <Header
        searchValue={inputSearch}
        setSearchValue={setInputSearch}
        handleSearchRepos={handleSearchRepos}
      />
      <Message count={dataRepos.total_count} />
      <ReposResults data={repos} />
    </div>
  );
}

export default App;
