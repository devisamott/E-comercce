import React, { useContext } from 'react';
import { DataContext } from '../../../provider/index';
import './slider.css';

export function Slider() {
    const { currentIndex, setCurrentIndex, images } = useContext(DataContext);

    return (
        <div className="slider">
            <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
            <div className="navigation-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
