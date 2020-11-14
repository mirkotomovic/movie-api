import React, { useState, useEffect } from 'react'
import {
  useParams
} from "react-router-dom";
import BasicInfo from 'components/BasicInfoShow'
import CrewShow from 'components/CrewShow'
import CastShow from 'components/CastShow'
import Season from 'components/Season'
import { getBasicInfo, seasonsEpisodes } from 'services/show.service'

const Show = () => {
  const { showId } = useParams();
  const [showInfo, setShowInfo] = useState({});
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [seasonNumber, setSeasonNumber] = useState(1);

  const [loading, setLoading] = useState(true);
  const [loadingSeasons, setLoadingSeasons] = useState(true);

  useEffect(() => {
    getBasicInfo(showId).then(data => {
      setShowInfo(data);
      setCrew(uniqBy(data._embedded.crew, (item) => item.person.id));
      setCast(data._embedded.cast);
      setLoading(false);
    });
    seasonsEpisodes(showId).then(data => {
      setSeasons(data._embedded.seasons);
      setEpisodes(data._embedded.episodes);
      setLoadingSeasons(false);
    });
  }, [showId])

  if (loading || loadingSeasons) {
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
        <div className="seasonList">
          {seasons.map(item => {
            return (
              <button
                key={item.id}
                onClick={() => setSeasonNumber(item.number)}
                className={`seasonButton ${item.number === seasonNumber && 'seasonButtonActive'}`}
              >
                {item.number}
              </button>
            )
          })}
        </div>
        <Season props={seasons[seasonNumber-1]} episodes={episodes.filter((episode) => episode.season === seasonNumber)} />
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
