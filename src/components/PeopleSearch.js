import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import PersonCard from 'components/PersonCard';
import { searchPeople } from 'services/people.service';

import { AiOutlineSearch } from "react-icons/ai";
import PersonSearchSVG from "components/svg/undraw_Smiley_face_re_9uid.svg";

export const PeopleSearch = () => {
  const [people, setPeople] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = form => {
    searchPeople(form).then(data => setPeople(data));
  }
  return (
    <>
      <div className="search-container">
        <img className="search-svg" src={PersonSearchSVG} alt="SVG" />
        <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
          <label className="search-label" htmlFor="search">Crew and cast search:</label>
          <input className="form-field" ref={register} type="text" id="search" name="query" placeholder="Name" />
          <button className="form-btn"><AiOutlineSearch /></button>
        </form>
      </div>
      <div className="result-content">
        {people.map(person => {
          return (
            <Link key={person.person.id} to={"/people/" + person.person.id}>
              <PersonCard person={person}/>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default PeopleSearch
