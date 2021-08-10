/* eslint-disable max-len */
// == Import npm
import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

// == Import components
import axios from 'axios';
import SearchBar from 'src/components/SearchBar';
import ReposResults from 'src/components/ReposResults';
import Message from 'src/components/Message';

// import du fichier de données
import repos from 'src/data/repos';

// == Import
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.scss';

// == Composant
const App = () => {
  const [inputSearch, setInput] = useState('');
  const [results, setResults] = useState([]);

  // Si la requête est vide, on ne fait rien
  // Si la requête est déclarée, on lance la requête axios sur cette valeur (ajoutée à l'URL donnée)

  const loadResults = () => {
    if (inputSearch === '') {
      console.log("en attente d'une requête");
    } else {
      axios.get(`https://api.github.com/search/repositories?q=${inputSearch}`)
        .then((response) => {
          console.log(response.data);
          setResults(response.data.items);
          console.log('ça a marché');
        })
        .finally(() => {
        });
    }
  };

  return (
    <div className="app">
      <img src={githubLogo} alt="logo" className="logo-github" />
      <SearchBar request={inputSearch} set={setInput} loading={loadResults} />
      <ReposResults
        setResults={setResults}
        results={results}
      />
      <Message />
    </div>
  );
};

// == Export
export default App;

