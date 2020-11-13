import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useForm } from "react-hook-form";
// import { getPerson } from './services/people.service';
import { searchShow } from './services/show.service'
import SearchResult from 'components/SearchResult'
import ShowPage from 'components/Show'

import 'App.css'

function App() {
  const [shows, setShows] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = form => {
    searchShow(form).then(data => setShows(data));
  }

  // useEffect(() => {
  //   getPerson(1).then(data => setPerson(data));
  // }, [])

  return (
    <Router>
      <div className="app">
        <header className="header"></header>
        <Switch>
          <Route exact path='/show/:showId'>
            <ShowPage></ShowPage>
          </Route>
          <Route exact path='/'>
            <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
              <label>
                Show:
                <input ref={register} type="text" name="query" placeholder="Show name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <div className="resultContent">
              <SearchResult props={shows} />
            </div>
          </Route>
        </Switch>
        <footer className="footer"></footer>
      </div>
    </Router>
  );
}

export default App;
