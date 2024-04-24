import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Header from '../Header/Header';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';

import './App.scss';
import Faq from '../Faq/Faq';
import NotFound from '../NotFound/NotFound';

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

  const resetRepos = () => {
    setRepos([]);
    setCountRepos(0);
    setInputSearch('');
  };

  return (
    <div className="App">
      <Header
        searchValue={inputSearch}
        setSearchValue={setInputSearch}
        handleSearchRepos={loadRepos}
        resetRepos={resetRepos}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Message count={countRepos} />
              <ReposResults data={repos} />
            </div>
          }
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
