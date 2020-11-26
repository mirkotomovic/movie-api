import React from 'react'

const PersonCard = ({person}) => {
  return (
    <div className="person-card">
      <img
        onError={addDefaultSrc}
        src={person.person.image ? person.person.image.medium : "#"}
        alt={person.person.name}
        width="100py"
        height="150px" />
      <div className="container">
        {person.type ? <small><b>{person.type}: </b></small> : ""}
        <small>{person.person.name}</small>
      </div>
    </div>
  )
}

const addDefaultSrc = (ev) => {
  ev.target.src = 'https://via.placeholder.com/280x400?text=No+image+found'
}

export default PersonCard
