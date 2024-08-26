/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

const MiniCard = ({ time, temp, iconString }) => {
    const [icon, setIcon] = useState()
    const [background, setBackground] = useState('')

    useEffect(() => {
        if (iconString) {
            if (iconString.toLowerCase().includes('cloud')) {
                setIcon(cloud)
                setBackground('#E0E0E0') // Equivalent to bg-gray-300
            } else if (iconString.toLowerCase().includes('rain')) {
                setIcon(rain)
                setBackground('#3B82F6') // Equivalent to bg-blue-500
            } else if (iconString.toLowerCase().includes('clear')) {
                setIcon(sun)
                setBackground('#FBBF24') // Equivalent to bg-yellow-400
            } else if (iconString.toLowerCase().includes('thunder')) {
                setIcon(storm)
                setBackground('#4B5563') // Equivalent to bg-gray-600
            } else if (iconString.toLowerCase().includes('fog')) {
                setIcon(fog)
                setBackground('#F5F5F5') // Equivalent to bg-gray-200
            } else if (iconString.toLowerCase().includes('snow')) {
                setIcon(snow)
                setBackground('#FFFFFF') // Equivalent to bg-white
            } else if (iconString.toLowerCase().includes('wind')) {
                setIcon(wind)
                setBackground('#86EFAC') // Equivalent to bg-green-300
            }
        }
    }, [iconString])

    return (
        <div 
            style={{ backgroundColor: background }} 
            className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col sm:flex flex-2 sm:w-[12rem] sm:h-[12rem] md:w-[14rem] md:h-[14rem]"
        >
            <p className='text-center flex'>
                {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
            </p>
            <hr />
            <div className='w-full flex justify-center items-center flex-2 '>
                <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem]' />
            </div>
            <p className='text-center font-bold'>{temp}&deg;C</p>
        </div>
    )
}

export default MiniCard
