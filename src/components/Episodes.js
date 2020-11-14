import React from 'react'
import styles from 'components/Episodes.module.css';

const Episodes = ({ props }) => {
  return (
    <details>
      <summary>
        <b> Episode ({props.number})</b> {props.name}
      </summary>
      <div>
        <p>{props.summary.replace(/(<([^>]+)>)/ig, '')}</p>
      </div>
    </details>
  )
}

export default Episodes
