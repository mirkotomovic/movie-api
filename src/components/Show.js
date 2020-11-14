import React, { useState, useEffect } from 'react'
import {
  useParams
} from "react-router-dom";
import BasicInfo from 'components/BasicInfoShow'
import CrewShow from 'components/CrewShow'
import CastShow from 'components/CastShow'
import { getBasicInfo } from 'services/show.service'

const Show = () => {
  const { showId } = useParams();
  const [showInfo, setShowInfo] = useState({});
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBasicInfo(showId).then(data => {
      setShowInfo(data);
      setCrew(uniqBy(data._embedded.crew, (item) => item.person.id ));
      setCast(data._embedded.cast);
      setLoading(false);
    });
  }, [showId])

  if (loading) {
    return (<>
      <div className="pageTitle"><h1>Loading...</h1></div>
    </>
    )
  } else {
    return (<>
      <div className="pageTitle"><h1>{showInfo.name}</h1></div>
      <div className="showContent">
        <BasicInfo props={showInfo}></BasicInfo>
        <CastShow props={cast}></CastShow>
        <CrewShow props={crew}></CrewShow>
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
