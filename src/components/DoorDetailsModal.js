import React from 'react';
import './DoorDetailsModal.css';

export const DoorDetailsModal = ( {data, onClick } ) => {
    return (
        <div className='door-details-container' onClick={onClick} >
           <div className='door-details'>  
               <img alt='image-here' src={data.img}></img>
                <p className='modal-quote'>{data.text}</p>
                <p className='modal-name'>{data.name}</p>
            </div>
        </div>
    )
};