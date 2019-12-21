import React from 'react'

export function Choice(props) {
    const { className, image, onClick, title } = props;
    const header = (
        <div className='label'>{title}</div>
    )
    return (<>
        <a className={className} onClick={() => onClick()}>
            { title ? header : '' }
            <img src={image} />
        </a>
    </>)
}
