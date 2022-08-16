import React from 'react'

export default ({ name, removeFilterHandler }) => (
    <div className="filter">
        <div className="name">{name}</div>
        <div className="icon-wrapper" onClick={() => removeFilterHandler(name)}>
            <img src="./images/icon-remove.svg" alt="remove" />
        </div>
    </div>
)