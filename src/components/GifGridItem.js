import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ id, title, url}) => {
    //console.log(props)
  return (
    <div className='card animate__animated animate__fadeInDown'>
        <p> {title} </p>
        <img src={url} alt={title}/>
        
    </div>
  )
};

GifGridItem.propTypes = {};

export default GifGridItem;
