import React from 'react';
import './OpenDoor.css';

export const OpenDoor = ({ onDoorClick, image }) => {
    return (
        <div className='open-door' onClick={() => onDoorClick()}>
            <img alt='' src={image}></img>
        </div>
    )
};