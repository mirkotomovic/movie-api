import React from 'react'
import styles from 'components/CastShow.module.css';



const CrewShow = ({ props }) => {
  return (<>
  <h2>Crew members</h2>
    <section>
      {props.map(crew => {
        return (
          <div key={crew.person.id} className={styles.card}>
            <img
              onError={addDefaultSrc}
              src={crew.person.image ? crew.person.image.medium : "#"}
              alt={crew.person.name}
              width="100py"
              height="150px" />
              <div className={styles.container}>
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

export default CrewShow
