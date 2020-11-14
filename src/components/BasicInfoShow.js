import React from 'react'
import styles from 'components/BasicInfoShow.module.css';

const BasicInfoShow = ({ props }) => {
  return (
    <section className={styles.basicSection}>
      <img 
        src={props.image ? props.image.original : "#"}
        onError={addDefaultSrc}
        alt={props.name}
        height="400px"
        width="280px" />
      <div className={styles.aboutShow}>
      <ul>
          <li><b>Language: </b>{props.language}</li>
          <li><b>Runtime: </b>{props.runtime} minutes</li>
          <li><b>Premiered: </b>{props.premiered}</li>
          <li><b>Staus: </b>{props.status}</li>
          <li><b>Rating: </b>{props.rating ? props.rating.average : ""}</li>
          <li><b>Genres: </b>{props.genres.join(", ")}</li>
          <li><b>Official site: </b>
            <a href={props.officialSite}>
              {props.network ? props.network.name : "link"}
            </a></li>
        </ul>
        <p>{props.summary.replace(/(<([^>]+)>)/ig, '')}</p>

      </div>

    </section>
  )
}

const addDefaultSrc = (ev) => {
  ev.target.src = 'https://via.placeholder.com/280x400?text=No+image+found'
}

export default BasicInfoShow
