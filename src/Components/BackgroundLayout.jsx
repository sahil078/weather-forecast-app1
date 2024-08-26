import React, { useEffect, useState } from 'react';
import { useStateContext } from '../Context';
// images
import Clear from '../assets/images/Clear.jpg';
import Fog from '../assets/images/fog.png';
import Cloudy from '../assets/images/Cloudy.jpg';
import Rainy from '../assets/images/Rainy.jpg';
import Snow from '../assets/images/snow.jpg';
import Stormy from '../assets/images/Stormy.jpg';
import Sunny from '../assets/images/Sunny.jpg';

const BackgroundLayout = () => {
    const { weather } = useStateContext();
    const [image, setImage] = useState(Rainy);

    useEffect(() => {
        if (weather.conditions) {
            let imageString = weather.conditions
            if (imageString.toLowerCase().includes('clear')) {
                setImage(Clear)
            } else if (imageString.toLowerCase().includes('cloud')) {
                setImage(Cloudy)
            } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('partially cloudy')) {
                setImage(Rainy)
            } else if (imageString.toLowerCase().includes('snow')) {
                setImage(Snow)
            } else if (imageString.toLowerCase().includes('fog')) {
                setImage(Fog)
            } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
                setImage(Stormy)
            }
        }
    }, [weather])

    console.log(weather.conditions);

    return (
        <img
            src={image}
            alt="weather-image"
            className="h-screen w-full object-cover fixed left-0 top-0 -z-10 md:h-full sm:h-auto"
        />
    );
};

export default BackgroundLayout;
