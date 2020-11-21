import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import ShowCard from 'components/ShowCard';
import { searchShow } from 'services/show.service';

import { AiOutlineSearch } from "react-icons/ai";

export const SearchResult = () => {
  const [shows, setShows] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = form => {
    searchShow(form).then(data => setShows(data));
  }
  return (
    <>
      <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
        <input className="form-field" ref={register} type="text" name="query" placeholder="Show name" />
        {/* <input type="submit" value="Submit" /> */}
        <button className="form-btn"><AiOutlineSearch /></button>
      </form>
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
