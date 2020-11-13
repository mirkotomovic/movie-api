import React from 'react'
import { Link } from "react-router-dom";
import ShowCard from 'components/ShowCard'

export const SearchResult = ({ props }) => {
  return (
    <>
      {props.map(obj => {
        return (
          <Link key={obj.show.id} to={"/show/" + obj.show.id}>
            <ShowCard props={obj.show}></ShowCard>
          </Link>
        )
      })}
    </>
  )
}

export default SearchResult
