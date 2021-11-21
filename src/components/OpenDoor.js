import React from 'react';
import './OpenDoor.css';

export const OpenDoor = ({ onDoorClick }) => {
    return (
        <div className='open-door' onClick={() => onDoorClick()}>image go here
            <img alt='' src=''></img>
        </div>
    )
};