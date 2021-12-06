import React from 'react';
import './OpenDoor.css';

export const OpenDoor = ({ onDoorClick, image, number }) => {
    return (
        <div className='open-door' onClick={() => onDoorClick()}>
            <img alt='' src={image}></img>
            <div className='open-number'>{number}</div>
        </div>
    )
};