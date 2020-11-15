import React from 'react'

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
