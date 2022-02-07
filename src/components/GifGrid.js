import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs( category );

    // //Permite la ejecucion de esa function una sola vez
    // useEffect(() => {
    //     getGifs( category )
    //     .then( imgs => setImages(imgs) )

    // }, [ category ])

    return (
        <>
            <h3> {category} </h3>

            {/* { loading ? <p>Loading...</p> : null} */}
            { loading && <p>Loading...</p> }
           
            <div className='card-grid'>

                {images.map((img) => {
                    return (

                        <GifGridItem
                            key={img.id}
                            //img={img}
                            {...img}
                        />

                    )
                })}


            </div>
        </>

    );
};

GifGrid.propTypes = {};

export default GifGrid;
