import { useContext } from 'react';
import { DataContext } from '../../../provider/index';
import './slider.css';

export function Slider() {
    const { currentIndex, setCurrentIndex, firstProducts } = useContext(DataContext);

    const currentProduct = firstProducts[currentIndex];
    const imageUrl = currentProduct.images[0];

    return (
        <div className="slider">
            <img 
                src={imageUrl} 
                alt={currentProduct.title} 
            />
            <div className="navigation-dots">
                {firstProducts.map((_, index) => (
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
