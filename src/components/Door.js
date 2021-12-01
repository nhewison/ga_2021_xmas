import React, { useState } from 'react';
import { ClosedDoor } from './ClosedDoor'
import { OpenDoor } from './OpenDoor';
import { DoorDetailsModal } from './DoorDetailsModal';

export const Door = ({ data }) => {
    const [isDoorOpen, setIsDoorOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const onDoorClick = () => setIsDoorOpen(!isDoorOpen)
    const onOpenDoorClick = () => setIsModalOpen(!isModalOpen)
    console.log({isModalOpen})
    return (
        <>
        {!isDoorOpen && <ClosedDoor onDoorClick={onDoorClick} number={data.number} />} 
        {isDoorOpen && <OpenDoor onDoorClick={onOpenDoorClick} image={data.img} />}
        {isModalOpen && <DoorDetailsModal data={data} onClick={onOpenDoorClick}/>}
        </> 
    )
};