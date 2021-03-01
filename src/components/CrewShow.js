import React from 'react';
import PersonCard from 'components/PersonCard';
import { Link } from 'react-router-dom';

const CrewShow = ({ props }) => {
  return (
    <>
      <h2>Crew members</h2>
      <section>
        {props.map((crew) => {
          return (
            <Link key={crew.person.id} to={'/people/' + crew.person.id}>
              <PersonCard key={crew.person.id + crew.type} person={crew} />
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default CrewShow;
