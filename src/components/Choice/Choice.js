import React from 'react'

export function Choice(props) {
    const { className, image, onClick } = props;
    return (
        <a className={className} onClick={() => onClick()}>
            <img src={image} />
        </a>
    )
}
