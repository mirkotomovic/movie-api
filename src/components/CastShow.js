import React from 'react'

const CastShow = ({ props }) => {
  return (<>
  <h2>Cast members</h2>
    <section>
      {props.map(crew => {
        return (
          <div key={crew.person.id} className="person-card">
            <img
              onError={addDefaultSrc}
              src={crew.person.image ? crew.person.image.medium : "#"}
              alt={crew.person.name}
              width="100py"
              height="150px" />
              <div className="container">
                <small>{crew.person.name}</small>
              </div>
          </div>
        )
      })}
    </section>
    </>
  )
}

const addDefaultSrc = (ev) => {
  ev.target.src = 'https://via.placeholder.com/280x400?text=No+image+found'
}

export default CastShow
