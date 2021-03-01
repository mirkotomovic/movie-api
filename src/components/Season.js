import React, { useState, useEffect } from 'react';
import Episodes from 'components/Episodes';
import { seasonsEpisodes } from 'services/show.service';

const Season = ({ props }) => {
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [seasonNumber, setSeasonNumber] = useState(1);

  const [loadingSeasons, setLoadingSeasons] = useState(true);

  useEffect(() => {
    seasonsEpisodes(props).then((data) => {
      setSeasons(data._embedded.seasons);
      setEpisodes(data._embedded.episodes);
      setLoadingSeasons(false);
    });
  }, [props]);

  if (loadingSeasons) {
    return (
      <>
        <div className='page-title'>
          <h1>Loading...</h1>
        </div>
      </>
    );
  }
  const { name, image, premiereDate, endDate, episodeOrder } = seasons[
    seasonNumber - 1
  ];
  return (
    <section className='season-section'>
      <div className='season-list'>
        {seasons.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => setSeasonNumber(item.number)}
              className={`season-button ${
                item.number === seasonNumber && 'season-button-active'
              }`}
            >
              {item.number}
            </button>
          );
        })}
      </div>
      <div>
        <img
          src={image ? image.original : '#'}
          onError={addDefaultSrc}
          alt={name}
          height='400px'
          width='280px'
        />
        <ul style={{ padding: '0.5rem 0 1rem 2rem' }}>
          <li>
            <b>Premiere date: </b>
            {premiereDate}
          </li>
          <li>
            <b>End date: </b>
            {endDate}
          </li>
          <li>
            <b>Number of episodes: </b>
            {episodeOrder}
          </li>
        </ul>
      </div>
      <div className='episodes'>
        {episodes.map((episode) =>
          episode.season === seasonNumber ? (
            <Episodes key={episode.id} props={episode} />
          ) : (
            ''
          )
        )}
      </div>
    </section>
  );
};

const addDefaultSrc = (ev) => {
  ev.target.src = 'https://via.placeholder.com/280x400?text=No+image+found';
};

export default Season;
