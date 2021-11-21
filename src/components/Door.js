import React, { useState } from 'react';
import { ClosedDoor } from './ClosedDoor'
import { OpenDoor } from './OpenDoor';

export const Door = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)
    const onDoorClick = () => setIsOpen(!isOpen)
    return (
        <>
        {!isOpen && <ClosedDoor onDoorClick={onDoorClick} number={data.number} />} 
        {isOpen && <OpenDoor onDoorClick={onDoorClick} />}
        </>
    )
};