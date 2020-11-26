import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import ShowCard from 'components/ShowCard';
import { searchShow } from 'services/show.service';

import { AiOutlineSearch } from "react-icons/ai";
import ShowSearchSVG from "components/svg/gummy-tv-room.svg";

export const SearchResult = () => {
  const [shows, setShows] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = form => {
    searchShow(form).then(data => setShows(data));
  }
  return (
    <>
      <div className="search-container">
        <img className="search-svg" src={ShowSearchSVG} alt="SVG" />
        <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
          <label className="search-label" htmlFor="search">Show search:</label>
          <input className="form-field" ref={register} type="text" id="search" name="query" placeholder="Show name" />
          <button className="form-btn"><AiOutlineSearch /></button>
        </form>
      </div>
      <div className="result-content">
        {shows.map(obj => {
          return (
            <Link key={obj.show.id} to={"/show/" + obj.show.id}>
              <ShowCard props={obj.show}></ShowCard>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default SearchResult
