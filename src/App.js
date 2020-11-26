import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchResult from 'components/SearchResult'
import PeopleSearch from 'components/PeopleSearch'
import ShowPage from 'components/Show'
import PersonPage from 'components/PersonPage'
import Header from 'components/Header';
import About from 'components/About';
import 'App.css'

function App() {
  const [theme, setTheme] = useState(true)
  return (
    <Router>
      <div className={`app ${theme ? "dark" : "light"}`}>
        <Header themeSwitch={() => setTheme(!theme)}></Header>
        <Switch>:
          <Route path='/show/:showId'>
            <ShowPage></ShowPage>
          </Route>
          <Route path='/people/:personID'>
            <PersonPage></PersonPage>
          </Route>
          <Route path='/about'>
            <About>People</About>
          </Route>
          <Route exact path='/people'>
            <PeopleSearch></PeopleSearch>
          </Route>
          <Route exact path='/'>
            <SearchResult></SearchResult>
          </Route>
        </Switch>
        <footer className="footer"></footer>
      </div>
    </Router>
  );
}

export default App;
