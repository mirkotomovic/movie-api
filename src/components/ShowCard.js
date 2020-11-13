import React from 'react'
import styles from 'components/ShowCard.module.css';

const ShowCard = ({ props }) => {
    return (<div className={styles.card}>
        <img className={styles.showImage}
            onError={addDefaultSrc}
            src={props.image ? props.image.medium : "#"}
            alt={props.name}
            width="150py"
            height="210px" />
        <div className={styles.container}>
            <h4><b>{props.name}</b></h4>
        </div>
    </div>
    )
}

const addDefaultSrc = (ev) => {
    ev.target.src = 'https://via.placeholder.com/150x210?text=No+image+found'
}
export default ShowCard
