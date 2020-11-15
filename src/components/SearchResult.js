import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ShowCard from 'components/ShowCard';
import { useForm } from "react-hook-form";
import { searchShow } from 'services/show.service';

export const SearchResult = () => {
  const [shows, setShows] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = form => {
    searchShow(form).then(data => setShows(data));
  }
  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Show:
          <input ref={register} type="text" name="query" placeholder="Show name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div className="resultContent">
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
