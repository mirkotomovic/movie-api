import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const SeasonsNav = ({ props }) => {
  return (
    <ul>
      {props.seasons.map((season) => (
        <li>
          <Link to='/show/'> </Link>
        </li>
      ))}
    </ul>
  );
};

export default SeasonsNav;
