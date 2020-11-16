import React from 'react';
import PropTypes from 'prop-types';
import { useFetchHook } from '../hooks/useFetchHook';
import './GifGrid.css';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchHook(category);    

    return (
        <article>
            <h3 className='animate__animated animate__fadeInLeft'>{category} {loading && <small>"Cargando..."</small>}</h3>
            <div className="gifs-grid">
            {images.map( gif => <GifGridItem key={gif.id} {...gif}/>)}
            </div>
        </article>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};