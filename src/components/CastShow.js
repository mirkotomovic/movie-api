import React from 'react'
import PersonCard from 'components/PersonCard';
import { Link } from "react-router-dom";

const CastShow = ({ props }) => {
  return (<>
    <h2>Cast members</h2>
    <section>
      {props.map(cast => {
        return (
          <Link key={cast.person.id} to={"/people/" + cast.person.id}>
            <PersonCard key={cast.person.id} person={cast} />
          </Link>
        )
      })}
    </section>
  </>
  )
}

export default CastShow
