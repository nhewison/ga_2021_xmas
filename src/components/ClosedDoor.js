import React from 'react';
import './ClosedDoor.css';

export const ClosedDoor = ({onDoorClick}) => {
    return (
        <div className='closed-door' onClick={() => onDoorClick()}>
            <div className='door-number'>number</div>
        </div>
    )
};