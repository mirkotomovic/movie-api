import React, { useState, useEffect } from 'react';
import ShowCard from 'components/ShowCard';
import {
  getCrewCredits,
  getCastCredits,
  getPerson,
} from 'services/people.service';
import { useParams, Link } from 'react-router-dom';

const PersonPage = () => {
  const [person, setPerson] = useState({});
  const [crewcredits, setCrewcredits] = useState([]);
  const [castcredits, setCastcredits] = useState([]);

  const { personID } = useParams();

  useEffect(() => {
    getPerson(personID).then((data) => {
      setPerson(data);
    });
    getCastCredits(personID).then((data) => {
      setCastcredits(uniqBy(data, (item) => item._embedded.show.id));
    });
    getCrewCredits(personID).then((data) => {
      setCrewcredits(uniqBy(data, (item) => item._embedded.show.id));
    });
  }, [personID]);
  return (
    <section className='person-container'>
      <article className='person-basic'>
        <img
          src={person.image ? person.image.original : '#'}
          alt={person.name}
          height='300px'
          width='210px'
        />
        <ul className='about-person'>
          <li>
            <b>Name: </b>
            {person.name}
          </li>
          <li>
            <b>Birthday: </b>
            {person.birthday}
          </li>
          <li>
            <b>Country: </b>
            {person.country?.name}
          </li>
          <li>
            <b>Gender: </b>
            {person.gender}
          </li>
        </ul>
      </article>
      {castcredits.length !== 0 ? (
        <article className='cast-person'>
          <h1>Cast credit</h1>
          {castcredits.map((credit) => (
            <Link
              key={credit._embedded.show.id}
              to={'/show/' + credit._embedded.show.id}
            >
              <ShowCard props={credit._embedded.show} />
            </Link>
          ))}
        </article>
      ) : (
        <article className='cast-person'>
          <h3>No cast credit</h3>
        </article>
      )}
      {crewcredits.length !== 0 ? (
        <article className='crew-person'>
          <h1>Crew credit</h1>
          {crewcredits.map((credit) => (
            <Link
              key={credit._embedded.show.id}
              to={'/show/' + credit._embedded.show.id}
            >
              <ShowCard
                key={credit._embedded.show.id}
                props={credit._embedded.show}
              />
            </Link>
          ))}
        </article>
      ) : (
        <article className='crew-person'>
          <h3>No crew credit</h3>
        </article>
      )}
    </section>
  );
};

const uniqBy = (a, key) => {
  return [...new Map(a.map((x) => [key(x), x])).values()];
};

export default PersonPage;
