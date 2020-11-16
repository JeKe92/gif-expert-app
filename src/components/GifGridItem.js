import React from 'react'

import './GifGridItem.css';

export const GifGridItem = ( { title, url } ) => {
    return (
            <figure className="gifs-card animate__animated animate__fadeInDown">
                            <img src={url} alt={title}></img>
                            <figcaption>{title}</figcaption>
            </figure>
    )
}
