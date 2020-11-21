import React, { useState, useEffect } from 'react'
import BasicInfo from 'components/BasicInfoShow'
import CrewShow from 'components/CrewShow'
import CastShow from 'components/CastShow'
import Season from 'components/Season'
import { getBasicInfo } from 'services/show.service'
import {
  useRouteMatch,
  Switch,
  Route,
  NavLink,
  useParams
} from "react-router-dom";

const Show = () => {
  const { showId } = useParams();
  let { path, url } = useRouteMatch();
  const [showInfo, setShowInfo] = useState({});
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBasicInfo(showId).then(data => {
      setShowInfo(data);
      setCrew(uniqBy(data._embedded.crew, (item) => item.person.id));
      setCast(data._embedded.cast);
      setLoading(false);
    });
  }, [showId])

  if (loading) {
    return (<>
      <div className="page-title"><h1>Loading...</h1></div>
    </>
    )
  } else {
    return (<>
      <div className="page-title">
        <h1>{showInfo.name}</h1>
        <div className="btn-container">
          <NavLink exact activeClassName="active-btn" className="job-btn" to={`${url}`}>Home</NavLink>
          <NavLink activeClassName="active-btn" className="job-btn" to={`${url}/cast`}>Cast</NavLink>
          <NavLink activeClassName="active-btn" className="job-btn" to={`${url}/crew`}>Crew</NavLink>
          <NavLink activeClassName="active-btn" className="job-btn" to={`${url}/seasons`}>Seasons</NavLink>
        </div>
      </div>
      <div className="show-content">
        <Switch>
          <Route exact path={`${path}/cast`}>
            <CastShow props={cast}></CastShow>
          </Route>
          <Route exact path={`${path}/crew`}>
            <CrewShow props={crew}></CrewShow>
          </Route>
          <Route exact path={`${path}/seasons`}>
            <Season props={showId} />
          </Route>
          <Route exact path={`${path}/`}>
            <BasicInfo props={showInfo}></BasicInfo>
          </Route>
        </Switch>
      </div>
    </>
    )
  }
}

const uniqBy = (a, key) => {
  return [
    ...new Map(
      a.map(x => [key(x), x])
    ).values()
  ]
}

export default Show
