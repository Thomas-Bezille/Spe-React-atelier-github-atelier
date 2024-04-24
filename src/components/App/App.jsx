import { useState } from 'react';

import Header from '../Header/Header';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import data from '../../data/repos';

import './App.scss';

function App() {
  // Variable de state pour les repos -> default {}
  const [repos, setRepos] = useState(data);
  // Variable de state pour le contrôle de l'input -> default ''
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="App">
      <Header searchValue={inputSearch} setSearchValue={setInputSearch} />
      <Message count={repos.total_count} />
      <ReposResults data={repos} />
    </div>
  );
}

export default App;
