import React from 'react';
import PropTypes from 'prop-types';

import './GifGridItem.css';

export const GifGridItem = ( { title, url } ) => (
            <figure className="gifs-card animate__animated animate__fadeInDown">
                            <img src={url} alt={title}></img>
                            <figcaption>{title}</figcaption>
            </figure>
);

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}