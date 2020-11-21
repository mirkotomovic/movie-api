import React from 'react'

const ShowCard = ({ props }) => {
    return (<div className="show-card">
        <img
            onError={addDefaultSrc}
            src={props.image ? props.image.medium : "#"}
            alt={props.name}
            width="150py"
            height="210px" />
        <div className="card-text">
            <h4><b>{props.name}</b></h4>
        </div>
    </div>
    )
}

const addDefaultSrc = (ev) => {
    ev.target.src = 'https://via.placeholder.com/150x210?text=No+image+found'
}
export default ShowCard
