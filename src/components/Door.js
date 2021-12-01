import React, { useState, useEffect } from 'react';
import { ClosedDoor } from './ClosedDoor'
import { OpenDoor } from './OpenDoor';
import { DoorDetailsModal } from './DoorDetailsModal';

export const Door = ({ data }) => {
    const [isDoorOpen, setIsDoorOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    /**
     * On first render, set preivous days doors to be open
     */
    const date = new Date()
    const previousDay = date.getDate() - 1
    useEffect(() => {
        if (previousDay >= data.number) {
            setIsDoorOpen(true)
        }
    }, [])

    const onDoorClick = () => setIsDoorOpen(!isDoorOpen)
    const onOpenDoorClick = () => setIsModalOpen(!isModalOpen)

    return (
        <>
        {!isDoorOpen && <ClosedDoor onDoorClick={onDoorClick} number={data.number} />} 
        {isDoorOpen && <OpenDoor onDoorClick={onOpenDoorClick} image={data.img} />}
        {isModalOpen && <DoorDetailsModal data={data} onClick={onOpenDoorClick}/>}
        </> 
    )
};