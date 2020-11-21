import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchResult from 'components/SearchResult'
import ShowPage from 'components/Show'
import Header from 'components/Header';
import 'App.css'

function App() {
  const [theme, setTheme] = useState(true)
  return (
    <Router>
      <div className={`app ${theme ? "light" : "dark"}`}>
        <Header themeSwitch={() => setTheme(!theme)}></Header>
        <Switch>
          <Route path='/show/:showId'>
            <ShowPage></ShowPage>
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
